#!/usr/bin/env node
// app-smoke-test.mjs
//
// Headless smoke test for the BiS Companion WEB APP (app/): actually EXECUTES
// the real app/js/registry.js, app/data/**/*.data.js, and app/js/main.js
// inside a plain Node vm context against a hand-written DOM stub, so runtime
// errors (TypeErrors, bad selectors, nil derefs) are caught without a browser.
//
// Mirrors the house style of tools/addon-smoke-test.mjs: no mocking of the
// app's own logic, just a faithful-enough environment for it to run in, then
// a driver that clicks the same [data-*] controls a real user would.
//
// Usage:
//   node tools/app-smoke-test.mjs
//   node tools/app-smoke-test.mjs --class priest --spec shadow --bracket preraid --faction horde
//
// IMPORTANT: this file must never modify anything under app/ — it only reads
// those files and executes them in an isolated vm context. No jsdom or any
// other browser dependency is used; the DOM is a small hand-rolled stub.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "app");

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const opts = { class: "warrior", spec: null, bracket: "preraid", faction: "horde" };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--class") opts.class = String(argv[++i]).toLowerCase();
    else if (a === "--spec") opts.spec = String(argv[++i]).toLowerCase();
    else if (a === "--bracket") opts.bracket = String(argv[++i]).toLowerCase();
    else if (a === "--faction") opts.faction = String(argv[++i]).toLowerCase();
    else if (a === "--help" || a === "-h") {
      console.log(
        "Usage: node tools/app-smoke-test.mjs [--class token] [--spec token] [--bracket token] [--faction alliance|horde]"
      );
      process.exit(0);
    }
  }
  if (opts.faction !== "alliance" && opts.faction !== "horde") opts.faction = "horde";
  return opts;
}

const args = parseArgs(process.argv.slice(2));
console.log(
  `[smoke] requested character: ${args.faction} ${args.class}${args.spec ? "/" + args.spec : ""} @ ${args.bracket}`
);

// ===========================================================================
// SECTION 1: hand-written DOM stub
// ===========================================================================
//
// A small but real element tree: innerHTML assignment parses HTML into actual
// child nodes (via a regex-tokenizing mini parser, not a spec-compliant HTML
// parser), so that document-level querySelector/querySelectorAll, closest(),
// and click() event bubbling all work against real parent/child pointers —
// exactly what main.js's event-delegation code (`ev.target.closest(...)`,
// `document.addEventListener('click', ...)`) requires to behave correctly.

const VOID_TAGS = new Set(["img", "br", "hr", "input", "meta", "link", "source", "area", "col", "embed", "wbr"]);

function decodeEntities(s) {
  return String(s)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function camelToKebab(s) {
  return s.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}
function kebabToCamel(s) {
  return s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

class TextNode {
  constructor(data) {
    this.nodeType = 3;
    this.data = data;
  }
  get textContent() {
    return this.data;
  }
}

class ClassList {
  constructor(el) {
    this.el = el;
  }
  _get() {
    return (this.el.attributes.class || "").split(/\s+/).filter(Boolean);
  }
  _set(arr) {
    this.el.attributes.class = arr.join(" ");
  }
  add(...cls) {
    const s = new Set(this._get());
    cls.forEach((c) => s.add(c));
    this._set([...s]);
  }
  remove(...cls) {
    const s = new Set(this._get());
    cls.forEach((c) => s.delete(c));
    this._set([...s]);
  }
  toggle(cls, force) {
    const has = this._get().includes(cls);
    const on = force === undefined ? !has : !!force;
    if (on) this.add(cls);
    else this.remove(cls);
    return on;
  }
  contains(cls) {
    return this._get().includes(cls);
  }
}

function makeDataset(el) {
  return new Proxy(
    {},
    {
      get(_, prop) {
        if (typeof prop !== "string") return undefined;
        const attr = "data-" + camelToKebab(prop);
        return el.attributes[attr];
      },
      set(_, prop, value) {
        const attr = "data-" + camelToKebab(prop);
        el.attributes[attr] = String(value);
        return true;
      },
      has(_, prop) {
        const attr = "data-" + camelToKebab(prop);
        return attr in el.attributes;
      },
      deleteProperty(_, prop) {
        const attr = "data-" + camelToKebab(prop);
        delete el.attributes[attr];
        return true;
      },
      ownKeys() {
        return Object.keys(el.attributes)
          .filter((k) => k.startsWith("data-"))
          .map((k) => kebabToCamel(k.slice(5)));
      },
      getOwnPropertyDescriptor() {
        return { enumerable: true, configurable: true };
      },
    }
  );
}

let ELEMENT_SEQ = 1;

class Element {
  constructor(tag) {
    this.nodeType = 1;
    this._seq = ELEMENT_SEQ++;
    this._localTag = (tag || "div").toLowerCase();
    this.tagName = this._localTag.toUpperCase();
    this.attributes = {};
    this.childNodes = [];
    this.parentNode = null;
    this._listeners = {};
    this.style = {};
    this.value = "";
    this.classList = new ClassList(this);
    this.dataset = makeDataset(this);
  }
  get children() {
    return this.childNodes.filter((n) => n.nodeType === 1);
  }
  get id() {
    return this.attributes.id || "";
  }
  set id(v) {
    this.attributes.id = String(v);
  }
  get className() {
    return this.attributes.class || "";
  }
  set className(v) {
    this.attributes.class = String(v);
  }
  get textContent() {
    return this.childNodes.map((n) => (n.nodeType === 3 ? n.data : n.textContent)).join("");
  }
  set textContent(v) {
    this.childNodes = [new TextNode(String(v))];
  }
  get innerHTML() {
    return serializeNodes(this.childNodes);
  }
  set innerHTML(html) {
    parseHTMLInto(this, html == null ? "" : String(html));
  }
  getAttribute(name) {
    const v = this.attributes[name.toLowerCase()];
    return v === undefined ? null : v;
  }
  setAttribute(name, value) {
    this.attributes[name.toLowerCase()] = String(value);
  }
  removeAttribute(name) {
    delete this.attributes[name.toLowerCase()];
  }
  hasAttribute(name) {
    return name.toLowerCase() in this.attributes;
  }
  appendChild(child) {
    child.parentNode = this;
    this.childNodes.push(child);
    return child;
  }
  remove() {
    if (this.parentNode) {
      const idx = this.parentNode.childNodes.indexOf(this);
      if (idx >= 0) this.parentNode.childNodes.splice(idx, 1);
      this.parentNode = null;
    }
  }
  setAttributeNS(_ns, name, value) {
    this.setAttribute(name, value);
  }
  addEventListener(type, fn) {
    (this._listeners[type] = this._listeners[type] || []).push(fn);
  }
  removeEventListener(type, fn) {
    if (this._listeners[type]) this._listeners[type] = this._listeners[type].filter((f) => f !== fn);
  }
  getScript(type) {
    const hs = this._listeners[type];
    return hs && hs[0];
  }
  querySelector(sel) {
    return queryOne(this, sel);
  }
  querySelectorAll(sel) {
    return queryAll(this, sel);
  }
  closest(sel) {
    return closestImpl(this, sel);
  }
  click() {
    return fireEvent(this, "click", {}, true);
  }
  focus() {
    DOC.activeElement = this;
    fireEvent(this, "focus", {}, false);
  }
  blur() {
    if (DOC.activeElement === this) DOC.activeElement = DOC.body;
    fireEvent(this, "blur", {}, false);
  }
}

function serializeNodes(nodes) {
  return nodes
    .map((n) => {
      if (n.nodeType === 3) return n.data;
      const attrs = Object.entries(n.attributes)
        .map(([k, v]) => ` ${k}="${String(v).replace(/"/g, "&quot;")}"`)
        .join("");
      if (VOID_TAGS.has(n._localTag)) return `<${n._localTag}${attrs}>`;
      return `<${n._localTag}${attrs}>${serializeNodes(n.childNodes)}</${n._localTag}>`;
    })
    .join("");
}

// ---- mini HTML parser: HTML string -> real Element/TextNode tree ----------

function parseAttrs(raw, el) {
  if (!raw) return;
  const re = /([a-zA-Z_:][-\w:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let m;
  while ((m = re.exec(raw))) {
    const name = m[1].toLowerCase();
    if (name === "/") continue;
    const value = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : m[4] !== undefined ? m[4] : "";
    el.attributes[name] = decodeEntities(value);
  }
}

function parseHTMLInto(ownerEl, html) {
  ownerEl.childNodes = [];
  const stack = [ownerEl];
  // Strip HTML comments up front (none of the app's own markup relies on
  // them being preserved, and they can confuse the tag scanner if left in).
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  const tagRe = /<(\/?)([a-zA-Z][\w-]*)((?:\s+[^<>]*?)?)\s*(\/?)>/g;
  let lastIndex = 0;
  let m;
  while ((m = tagRe.exec(html))) {
    const [full, closing, rawTag, rawAttrs, selfClose] = m;
    const textBefore = html.slice(lastIndex, m.index);
    if (textBefore) {
      stack[stack.length - 1].childNodes.push(new TextNode(decodeEntities(textBefore)));
    }
    lastIndex = m.index + full.length;
    const tag = rawTag.toLowerCase();
    if (closing) {
      for (let j = stack.length - 1; j > 0; j--) {
        if (stack[j]._localTag === tag) {
          stack.length = j;
          break;
        }
      }
    } else {
      const el = new Element(tag);
      parseAttrs(rawAttrs, el);
      const parent = stack[stack.length - 1];
      el.parentNode = parent;
      parent.childNodes.push(el);
      if (!selfClose && !VOID_TAGS.has(tag) && tag !== "script" && tag !== "style") {
        stack.push(el);
      } else if (tag === "script" || tag === "style") {
        // These are inert in our stub (external <script src> tags land here
        // when we parse the static body markup) — skip to their real closing
        // tag without treating any of their raw text as nested elements.
        const closeRe = new RegExp("</" + tag + "\\s*>", "i");
        const rest = html.slice(lastIndex);
        const cm = closeRe.exec(rest);
        if (cm) lastIndex += cm.index + cm[0].length;
      }
    }
  }
  const trailing = html.slice(lastIndex);
  if (trailing) stack[stack.length - 1].childNodes.push(new TextNode(decodeEntities(trailing)));
}

// ---- mini CSS selector engine (tag / #id / .class / [attr] / [attr=val],
// compound sequences, whitespace-separated descendant combinator only) -----

function parseSimpleSelector(sel) {
  let tag = null;
  let id = null;
  const classes = [];
  const attrs = [];
  const tagMatch = sel.match(/^[a-zA-Z][\w-]*/);
  let rest = sel;
  if (tagMatch) {
    tag = tagMatch[0].toLowerCase();
    rest = sel.slice(tagMatch[0].length);
  }
  const re = /\.([\w-]+)|#([\w-]+)|\[([\w-]+)(?:=("([^"]*)"|'([^']*)'|([^\]]*)))?\]/g;
  let m;
  while ((m = re.exec(rest))) {
    if (m[1]) classes.push(m[1]);
    else if (m[2]) id = m[2];
    else if (m[3]) {
      const name = m[3].toLowerCase();
      let value = null;
      if (m[5] !== undefined) value = m[5];
      else if (m[6] !== undefined) value = m[6];
      else if (m[7] !== undefined) value = m[7];
      attrs.push({ name, value });
    }
  }
  return { tag, id, classes, attrs };
}

function matchesSimple(el, simple) {
  if (!el || el.nodeType !== 1) return false;
  if (simple.tag && el._localTag !== simple.tag) return false;
  if (simple.id && el.attributes.id !== simple.id) return false;
  for (const c of simple.classes) if (!el.classList.contains(c)) return false;
  for (const a of simple.attrs) {
    if (!(a.name in el.attributes)) return false;
    if (a.value !== null && el.attributes[a.name] !== a.value) return false;
  }
  return true;
}

function matchesChain(el, tokens) {
  const last = tokens[tokens.length - 1];
  if (!matchesSimple(el, last)) return false;
  if (tokens.length === 1) return true;
  let idx = tokens.length - 2;
  let cur = el.parentNode;
  while (cur && idx >= 0) {
    if (matchesSimple(cur, tokens[idx])) idx--;
    cur = cur.parentNode;
  }
  return idx < 0;
}

function walkMatches(root, tokens, out) {
  for (const child of root.children) {
    if (matchesChain(child, tokens)) out.push(child);
    walkMatches(child, tokens, out);
  }
}

function queryAll(root, selector) {
  const tokens = selector.trim().split(/\s+/).map(parseSimpleSelector);
  const out = [];
  walkMatches(root, tokens, out);
  return out;
}
function queryOne(root, selector) {
  const tokens = selector.trim().split(/\s+/).map(parseSimpleSelector);
  let found = null;
  (function walk(node) {
    for (const child of node.children) {
      if (found) return;
      if (matchesChain(child, tokens)) {
        found = child;
        return;
      }
      walk(child);
      if (found) return;
    }
  })(root);
  return found;
}
function closestImpl(el, selector) {
  const simple = parseSimpleSelector(selector.trim());
  let cur = el;
  while (cur && cur.nodeType === 1) {
    if (matchesSimple(cur, simple)) return cur;
    cur = cur.parentNode;
  }
  return null;
}

// ---- event dispatch (bubbling to document, honoring stopPropagation) -----

function fireEvent(target, type, extraProps, bubbles) {
  const ev = Object.assign(
    {
      type,
      target,
      currentTarget: target,
      defaultPrevented: false,
      preventDefault() {
        this.defaultPrevented = true;
      },
      _stopped: false,
      stopPropagation() {
        this._stopped = true;
      },
      stopImmediatePropagation() {
        this._stopped = true;
      },
    },
    extraProps || {}
  );
  const chain = [];
  let node = target;
  while (node) {
    chain.push(node);
    node = node.parentNode;
  }
  if (bubbles) chain.push(DOC); // document itself is the final bubble target
  for (const n of chain) {
    ev.currentTarget = n;
    const hs = n._listeners && n._listeners[type];
    if (hs) for (const h of hs.slice()) h(ev);
    if (ev._stopped) break;
    if (!bubbles) break;
  }
  return ev;
}

// ---- document / window --------------------------------------------------

const DOC = {
  nodeType: 9,
  documentElement: null,
  body: null,
  activeElement: null,
  _listeners: {},
  addEventListener(type, fn) {
    (this._listeners[type] = this._listeners[type] || []).push(fn);
  },
  removeEventListener(type, fn) {
    if (this._listeners[type]) this._listeners[type] = this._listeners[type].filter((f) => f !== fn);
  },
  createElement(tag) {
    return new Element(tag);
  },
  createTextNode(data) {
    return new TextNode(String(data));
  },
  querySelector(sel) {
    return queryOne(this.documentElement, sel);
  },
  querySelectorAll(sel) {
    return queryAll(this.documentElement, sel);
  },
  getElementById(id) {
    return queryOne(this.documentElement, "#" + id);
  },
};

function makeLocalStorage() {
  const store = new Map();
  return {
    getItem(k) {
      return store.has(k) ? store.get(k) : null;
    },
    setItem(k, v) {
      store.set(String(k), String(v));
    },
    removeItem(k) {
      store.delete(k);
    },
    clear() {
      store.clear();
    },
    key(i) {
      return [...store.keys()][i] ?? null;
    },
    get length() {
      return store.size;
    },
  };
}

const promptQueue = [];
function makeSandbox() {
  const sandbox = {};
  sandbox.document = DOC;
  sandbox.localStorage = makeLocalStorage();
  sandbox.requestAnimationFrame = (fn) => {
    fn();
    return 1;
  };
  sandbox.cancelAnimationFrame = () => {};
  sandbox.prompt = (msg, def) => (promptQueue.length ? promptQueue.shift() : def ?? null);
  sandbox.confirm = () => true;
  sandbox.alert = () => {};
  sandbox.console = {
    log: (...a) => console.log("[app log]", ...a),
    warn: (...a) => {
      appWarnings.push(a.map(String).join(" "));
      console.log("[app warn]", ...a);
    },
    error: (...a) => {
      appWarnings.push(a.map(String).join(" "));
      console.log("[app error]", ...a);
    },
    info: (...a) => console.log("[app info]", ...a),
  };
  sandbox.setTimeout = (fn, ms, ...rest) => {
    fn(...rest);
    return 1;
  };
  sandbox.clearTimeout = () => {};
  sandbox.setInterval = () => 1;
  sandbox.clearInterval = () => {};
  sandbox.encodeURIComponent = encodeURIComponent;
  sandbox.decodeURIComponent = decodeURIComponent;
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.self = sandbox;
  return sandbox;
}

const appWarnings = [];

// ===========================================================================
// SECTION 2: load index.html's static markup + script order
// ===========================================================================

const indexHtmlPath = path.join(APP_DIR, "index.html");
const indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

function extractScriptSrcs(html) {
  const re = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi;
  const out = [];
  let m;
  while ((m = re.exec(html))) {
    const src = m[1];
    if (/^https?:\/\//i.test(src)) continue; // external (wowhead tooltips) — skip
    out.push(src);
  }
  return out;
}

function extractHtmlTagAttrs(html) {
  const m = html.match(/<html([^>]*)>/i);
  const el = new Element("html");
  if (m) parseAttrs(m[1], el);
  return el;
}

function extractBodyInner(html) {
  const m = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return m ? m[1] : "";
}

const scriptSrcs = extractScriptSrcs(indexHtml);
const mainJsIdx = scriptSrcs.findIndex((s) => s.endsWith("js/main.js"));
if (mainJsIdx === -1) {
  console.error("[smoke] FATAL: could not find js/main.js in app/index.html's <script src> list");
  process.exit(1);
}
const preScripts = scriptSrcs.slice(0, mainJsIdx);
const mainScript = scriptSrcs[mainJsIdx];
const postScripts = scriptSrcs.slice(mainJsIdx + 1);

console.log(`[smoke] script load order parsed from index.html: ${scriptSrcs.length} local scripts`);

// ===========================================================================
// SECTION 3: build DOM + vm context, load scripts in index.html's order
// ===========================================================================

const sandbox = makeSandbox();
const context = vm.createContext(sandbox);

DOC.documentElement = extractHtmlTagAttrs(indexHtml);
DOC.body = new Element("body");
DOC.body.parentNode = DOC.documentElement;
DOC.documentElement.childNodes = [DOC.body];
parseHTMLInto(DOC.body, extractBodyInner(indexHtml));
DOC.activeElement = DOC.body;

const errors = [];
function safeCall(ctx, fn) {
  try {
    fn();
    return true;
  } catch (e) {
    const msg = (e && e.stack) || String(e);
    errors.push({ context: ctx, message: msg });
    console.log(`SMOKE_ERROR|${ctx}|${String((e && e.message) || e)}`);
    return false;
  }
}
function assertTrue(ctx, cond, msg) {
  if (!cond) {
    errors.push({ context: ctx, message: "ASSERTION FAILED: " + msg });
    console.log(`SMOKE_ERROR|${ctx}|ASSERTION FAILED: ${msg}`);
  }
  return !!cond;
}

function runFile(relPath) {
  const abs = path.join(APP_DIR, relPath);
  const source = fs.readFileSync(abs, "utf8");
  try {
    vm.runInContext(source, context, { filename: abs });
    return true;
  } catch (e) {
    const msg = (e && e.stack) || String(e);
    errors.push({ context: "load:" + relPath, message: msg });
    console.log(`SMOKE_ERROR|load:${relPath}|${String((e && e.message) || e)}`);
    return false;
  }
}

console.log("[smoke] loading scripts...");
let loadFailed = false;
for (const src of preScripts) {
  if (!runFile(src)) loadFailed = true;
}
if (loadFailed) {
  console.error("\n[smoke] FATAL: one or more data/registry scripts failed to load. See SMOKE_ERROR lines above.");
  process.exitCode = 1;
  process.exit(1);
}
console.log(`[smoke] loaded ${preScripts.length} registry/data scripts OK`);

// ---------------------------------------------------------------------------
// Seed localStorage with the requested character BEFORE main.js boots. main.js
// backfills any field not present against its own `defaults` object, so we
// only need to specify the fields the user actually asked to vary; an invalid
// combination is self-corrected by the app's own validateSelections() at
// boot (exercising that code path for free), and we read back whatever the
// app actually resolved to from the rendered DOM afterward.
// ---------------------------------------------------------------------------

// A class is only playable by certain races, and the app validates race before
// class — so seeding "mage" while the race stays Orc makes the app correctly
// fall back to a class the Orc can play. Seed a race that can actually play the
// requested class, otherwise the flags silently don't take effect.
function seedRaceFor(classId, faction) {
  if (!classId) return undefined;
  const core = sandbox.WOWDATA && sandbox.WOWDATA.core;
  const races = (core && core.races) || [];
  const match = races.find((r) => r.classes.includes(classId) && (!faction || r.faction === faction))
    || races.find((r) => r.classes.includes(classId));
  return match && match.id;
}
const seedRace = seedRaceFor(args.class, args.faction);
const seedProfile = {
  id: "smoketest1",
  name: "Smoke Test",
  expansion: "tbc",
  faction: (seedRace && (sandbox.WOWDATA.core.races.find((r) => r.id === seedRace) || {}).faction) || args.faction,
  race: seedRace,
  class: args.class,
  spec: args.spec,
  bracket: args.bracket,
};
sandbox.localStorage.setItem("bisCompanion.v2", JSON.stringify({ activeId: seedProfile.id, profiles: [seedProfile] }));

if (!runFile(mainScript)) {
  console.error("\n[smoke] FATAL: js/main.js threw while loading/booting. See SMOKE_ERROR lines above.");
  process.exitCode = 1;
  process.exit(1);
}
for (const src of postScripts) {
  if (!runFile(src)) loadFailed = true;
}
console.log("[smoke] app booted without throwing\n");

// ===========================================================================
// SECTION 4: driver helpers
// ===========================================================================

const WOWDATA = sandbox.WOWDATA;
const CORE = WOWDATA && WOWDATA.core;
assertTrue("boot", !!WOWDATA, "window.WOWDATA was never created by js/registry.js");
assertTrue("boot", !!CORE, "WOWDATA.core was never registered by data/core.data.js");

function $(sel) {
  return DOC.querySelector(sel);
}
function $$(sel, root) {
  return (root || DOC).querySelectorAll(sel);
}

function activeDataset(containerSel, camelKey) {
  const container = $(containerSel);
  if (!container) return null;
  const btn = container.querySelector(".active");
  return btn ? btn.dataset[camelKey] : null;
}

function findItemDivById(containerEl, id) {
  if (!containerEl) return null;
  const items = containerEl.querySelectorAll(".sd-item");
  for (const it of items) {
    const a = it.querySelector("a[data-wowhead]") || it.querySelector("a");
    if (a) {
      const href = a.getAttribute("href") || "";
      if (href.includes("item=" + id)) return it;
    }
  }
  return null;
}

// Navigate the sidebar to a specific faction/race/class/spec/bracket by
// clicking the same buttons a real user would, re-querying the DOM after
// each click since renderAll() regenerates every container's innerHTML.
function navigateTo({ faction, raceId, classId, specId, bracketId }) {
  if (faction) {
    const cur = activeDataset("#faction-toggle", "f");
    if (cur !== faction) {
      const btn = $("#faction-toggle").querySelector(`[data-f="${faction}"]`);
      assertTrue("navigate:faction", !!btn, `no faction button for "${faction}"`);
      if (btn) btn.click();
    }
  }
  if (raceId) {
    const btn = $("#race-grid").querySelector(`[data-r="${raceId}"]`);
    assertTrue("navigate:race", !!btn, `no race button for "${raceId}" (faction=${activeDataset("#faction-toggle", "f")})`);
    if (btn) btn.click();
  }
  if (classId) {
    const btn = $("#class-grid").querySelector(`[data-c="${classId}"]`);
    assertTrue("navigate:class", !!btn, `no class button for "${classId}"`);
    if (btn && !btn.classList.contains("nodata")) btn.click();
  }
  if (specId) {
    const list = $("#spec-list");
    const btn = list && list.querySelector(`[data-s="${specId}"]`);
    if (btn) btn.click();
  }
  if (bracketId) {
    const list = $("#bracket-list");
    const btn = list && list.querySelector(`[data-b="${bracketId}"]`);
    if (btn && !btn.classList.contains("disabled")) btn.click();
    else assertTrue("navigate:bracket", false, `no enabled bracket button for "${bracketId}"`);
  }
}

function raceFor(classId, faction) {
  const candidates = CORE.races.filter((r) => r.classes.includes(classId) && (!faction || r.faction === faction));
  return candidates[0] || CORE.races.find((r) => r.classes.includes(classId));
}

// ===========================================================================
// SECTION 5: assertions
// ===========================================================================

let checks = 0;
function check(ctx, cond, msg) {
  checks++;
  return assertTrue(ctx, cond, msg);
}

// ---- (a) status bar reports classes with data ----
safeCall("status-bar", () => {
  const status = $("#statusbar");
  check("status-bar", !!status, "#statusbar was never rendered");
  const text = status.textContent;
  const m = text.match(/Classes with data:\s*(\d+)\/(\d+)/);
  check("status-bar", !!m, `status bar text didn't contain "Classes with data: N/M" — got: ${JSON.stringify(text)}`);
  if (m) {
    const loaded = Number(m[1]);
    check("status-bar", loaded > 0, `status bar reports 0 classes with data for tbc (${text})`);
    console.log(`[smoke] status bar: classes with data ${m[1]}/${m[2]}`);
  }
});

// ---- resolve what character the app actually booted into ----
let resolved = {};
safeCall("resolve-character", () => {
  resolved = {
    faction: activeDataset("#faction-toggle", "f"),
    race: activeDataset("#race-grid", "r"),
    class: activeDataset("#class-grid", "c"),
    spec: activeDataset("#spec-list", "s"),
    bracket: activeDataset("#bracket-list", "b"),
  };
  console.log(`[smoke] resolved character: ${JSON.stringify(resolved)}`);
  // Only hold the app to the requested class if it actually has tbc data —
  // classes with none (e.g. Death Knight, wotlk-only) are EXPECTED to fall
  // back to something else via validateSelections(), same as the addon test
  // treats "no ClassData for this class" as non-fatal.
  const requestedHasData = WOWDATA.classesFor("tbc").includes(args.class);
  if (requestedHasData) {
    check(
      "resolve-character",
      resolved.class === args.class,
      `requested class "${args.class}" has tbc data but the app resolved to "${resolved.class}" instead`
    );
  } else {
    console.log(`[smoke] note: "${args.class}" has no tbc data — validateSelections() correctly fell back to "${resolved.class}"`);
  }
});

// ---- (b) gear doll: 17 slot cells, every item cell has a wowhead link ----
safeCall("gear-doll", () => {
  const doll = $("#gear-doll");
  check("gear-doll", !!doll, "#gear-doll was never rendered");
  const cells = doll.querySelectorAll(".slot-cell");
  check(
    "gear-doll",
    cells.length === 17,
    `expected 17 slot cells (15 slots + doubled rings + doubled trinkets), got ${cells.length}`
  );
  const itemCells = doll.querySelectorAll(".slot-cell[data-cell]");
  check("gear-doll", itemCells.length > 0, `no item-bearing cells rendered for ${resolved.class}/${resolved.spec}/${resolved.bracket} — no data for this combination`);
  let linked = 0;
  for (const cell of itemCells) {
    const a = cell.querySelector(".sc-item a[data-wowhead]");
    if (check("gear-doll", !!a, `item cell for slot "${cell.dataset.slot}" has no wowhead-linked <a data-wowhead>`)) {
      if (check("gear-doll", a.textContent.trim().length > 0, `wowhead link for slot "${cell.dataset.slot}" has empty text`)) {
        linked++;
      }
    }
  }
  console.log(`[smoke] gear doll: ${cells.length} cells total, ${itemCells.length} with an item, ${linked} with a valid wowhead link`);
});

// ---- (c) tabs: quests view and shopping view render real content ----
safeCall("tab-quests", () => {
  const btn = $('#main-tabs [data-tab="quests"]');
  check("tab-quests", !!btn, 'no [data-tab="quests"] button in #main-tabs');
  if (btn) btn.click();
  check("tab-quests", $("#tab-quests").classList.contains("active"), "#tab-quests did not get .active after clicking the Quests tab");
  const list = $("#instance-list");
  const rows = list.querySelectorAll(".il-row");
  check("tab-quests", rows.length > 0, "Quests tab: #instance-list rendered zero .il-row instances");
  const detail = $("#instance-detail");
  const quests = detail.querySelectorAll(".quest-row");
  check("tab-quests", quests.length > 0, "Quests tab: #instance-detail rendered zero .quest-row quests for the selected instance");
  console.log(`[smoke] quests tab: ${rows.length} instances listed, ${quests.length} quests for the selected one`);
});

safeCall("tab-shopping", () => {
  const btn = $('#main-tabs [data-tab="shopping"]');
  check("tab-shopping", !!btn, 'no [data-tab="shopping"] button in #main-tabs');
  if (btn) btn.click();
  check("tab-shopping", $("#tab-shopping").classList.contains("active"), "#tab-shopping did not get .active after clicking the Shopping tab");
  const list = $("#shopping-list");
  const groups = list.querySelectorAll(".shop-group");
  check(
    "tab-shopping",
    groups.length > 0 || list.textContent.includes("fully BiS"),
    `Shopping tab rendered zero .shop-group rows and no "fully BiS" message for ${resolved.class}/${resolved.spec}/${resolved.bracket}`
  );
  console.log(`[smoke] shopping tab: ${groups.length} grouped rows`);
  // back to gear for the rest of the driver
  const gearBtn = $('#main-tabs [data-tab="gear"]');
  if (gearBtn) gearBtn.click();
});

// ---- (d) search box ----
safeCall("search", () => {
  const input = $("#search-input");
  check("search", !!input, "#search-input was never found");
  input.value = "band";
  const handler = input._listeners && input._listeners.input && input._listeners.input[0];
  check("search", !!handler, "#search-input has no stored 'input' event handler");
  if (handler) handler({ target: input });
  const box = $("#search-results");
  check("search", !box.classList.contains("hidden"), 'search results box still has class "hidden" after searching "band"');
  const rows = box.querySelectorAll(".sr-row");
  check("search", rows.length > 0, 'searching "band" produced zero .sr-row results (expected real TBC ring/item matches)');
  console.log(`[smoke] search "band": ${rows.length} result rows`);
  // clear it so later state is sane
  input.value = "";
  if (handler) handler({ target: input });
});

// ---- (e) switching bracket re-renders with different content ----
safeCall("bracket-switch", () => {
  const list = $("#bracket-list");
  const allBtns = list.querySelectorAll("button");
  const candidates = allBtns.filter((b) => !b.classList.contains("disabled") && b.dataset.b !== resolved.bracket);
  check("bracket-switch", candidates.length > 0, "no second bracket with data to switch to for this class/spec");
  if (candidates.length > 0) {
    const before = $("#gear-doll").innerHTML;
    const target = candidates[0];
    target.click();
    const afterBracket = activeDataset("#bracket-list", "b");
    check("bracket-switch", afterBracket === target.dataset.b, `clicking bracket "${target.dataset.b}" did not make it active (active is "${afterBracket}")`);
    const after = $("#gear-doll").innerHTML;
    check("bracket-switch", after !== before, `switching bracket from "${resolved.bracket}" to "${target.dataset.b}" did not change #gear-doll content`);
    console.log(`[smoke] bracket switch: ${resolved.bracket} -> ${target.dataset.b}, doll content changed=${after !== before}`);
    // switch back so subsequent checks use the originally resolved bracket
    const back = list.querySelectorAll("button").find((b) => b.dataset.b === resolved.bracket);
    if (back) back.click();
  }
});

// ---- (f) "Go for this" / "Use as Ring N" changes the doll + BiS count ----
safeCall("target-picking", () => {
  const doll = $("#gear-doll");
  const cells = doll.querySelectorAll(".slot-cell[data-cell]");
  let workingCell = null;
  let itemCount = 0;
  for (const cell of cells) {
    cell.click();
    const detail = $("#slot-detail");
    const items = detail.querySelectorAll(".sd-item");
    if (items.length >= 2) {
      workingCell = cell;
      itemCount = items.length;
      break;
    }
  }
  check("target-picking", !!workingCell, "no slot with 2+ ranked items found to exercise target switching");
  if (!workingCell) return;

  const slotKey = workingCell.dataset.slot;
  console.log(`[smoke] target-picking: using slot "${slotKey}" (${itemCount} ranked items)`);

  function readOwnedCount() {
    const banner = $("#spec-banner").textContent;
    const m = banner.match(/(\d+)\s*\/\s*(\d+)\s*\((\d+)%\)/);
    return m ? { owned: Number(m[1]), total: Number(m[2]) } : null;
  }

  const before = readOwnedCount();
  check("target-picking", !!before, "could not parse 'BiS collected N / M' from #spec-banner");

  // Mark the currently-chosen (rank 0) item as obtained.
  let detail = $("#slot-detail");
  let firstDi = detail.querySelector('[data-di="0"]');
  check("target-picking", !!firstDi, "slot-detail's first item has no [data-di=\"0\"] obtain-checkbox");
  const baselineName = detail.querySelector(".sd-item .sd-name a") ? detail.querySelector(".sd-item .sd-name a").textContent : null;
  if (firstDi) firstDi.click();

  const afterOwn = readOwnedCount();
  check(
    "target-picking",
    !!afterOwn && before && afterOwn.owned === before.owned + 1,
    `marking the default item obtained should raise BiS collected by 1 (was ${before && before.owned}, now ${afterOwn && afterOwn.owned})`
  );

  // Re-query after the re-render and pick a DIFFERENT (not-owned) item as the target.
  detail = $("#slot-detail");
  const items = detail.querySelectorAll(".sd-item");
  const secondItem = items[1];
  check("target-picking", !!secondItem, "slot-detail lost its second item after marking the first obtained");
  const targetBtn = secondItem && secondItem.querySelector('[data-target][data-worn="0"]');
  check("target-picking", !!targetBtn, 'second item has no [data-target][data-worn="0"] button (expected "Go for this" / "Use as X 1")');
  const secondName = secondItem ? secondItem.querySelector(".sd-name a").textContent : null;
  if (targetBtn) targetBtn.click();

  const dollNow = $("#gear-doll").querySelector(`.slot-cell[data-slot="${slotKey}"][data-cell] .sc-item a`);
  check(
    "target-picking",
    !!dollNow && dollNow.textContent === secondName && dollNow.textContent !== baselineName,
    `doll cell for "${slotKey}" should now show "${secondName}" (was "${baselineName}"), got "${dollNow && dollNow.textContent}"`
  );

  const afterTarget = readOwnedCount();
  check(
    "target-picking",
    !!afterTarget && afterOwn && afterTarget.owned === afterOwn.owned - 1,
    `switching target to a not-yet-owned item should drop BiS collected back by 1 (was ${afterOwn && afterOwn.owned}, now ${afterTarget && afterTarget.owned})`
  );
  console.log(
    `[smoke] target-picking: doll item ${baselineName} -> ${secondName}; BiS collected ${before.owned} -> ${afterOwn.owned} -> ${afterTarget.owned}`
  );

  // clean up: un-target and un-obtain so later checks see a neutral state
  if (targetBtn) targetBtn.click();
  detail = $("#slot-detail");
  const resetDi = detail.querySelector('[data-di="0"]');
  if (resetDi) resetDi.click();
});

// ---- (g) two-handed main hand blocks the off-hand ----
safeCall("two-hander-blocks-offhand", () => {
  let target = null;
  outer: for (const cd of WOWDATA.bis.filter((b) => b.expansion === "tbc")) {
    for (const spec of cd.specs) {
      for (const br of spec.brackets || []) {
        const oh = (br.slots && br.slots.offhand) || [];
        const mh = (br.slots && br.slots.mainhand) || [];
        const twoHander = mh.find((it) => it.hand === "two");
        const oneHander = mh.find((it) => it.hand !== "two");
        if (oh.length && twoHander && oneHander) {
          target = { classId: cd.class, specId: spec.id, bracketId: br.id, twoHandId: twoHander.id, oneHandId: oneHander.id };
          break outer;
        }
      }
    }
  }
  check("two-hander-blocks-offhand", !!target, "no class/spec/bracket in tbc data offers both an off-hand and a 2H main hand option");
  if (!target) return;

  const race = raceFor(target.classId);
  check("two-hander-blocks-offhand", !!race, `no playable race found for class "${target.classId}"`);
  navigateTo({ faction: race.faction, raceId: race.id, classId: target.classId, specId: target.specId, bracketId: target.bracketId });

  const mhCell = $(`#gear-doll .slot-cell[data-slot="mainhand"]`);
  check("two-hander-blocks-offhand", !!mhCell, "no mainhand cell rendered for the 2H test character");
  if (mhCell) mhCell.click();

  let slotDetail = $("#slot-detail");
  const oneHandDiv = findItemDivById(slotDetail, target.oneHandId);
  check("two-hander-blocks-offhand", !!oneHandDiv, `1H main hand item ${target.oneHandId} not found in slot-detail`);
  if (oneHandDiv) {
    const btn = oneHandDiv.querySelector('[data-target][data-worn="0"]');
    if (btn) btn.click();
  }

  function readTotal() {
    const banner = $("#spec-banner").textContent;
    const m = banner.match(/\d+\s*\/\s*(\d+)\s*\(/);
    return m ? Number(m[1]) : null;
  }
  const totalWithOneHand = readTotal();

  slotDetail = $("#slot-detail");
  const twoHandDiv = findItemDivById(slotDetail, target.twoHandId);
  check("two-hander-blocks-offhand", !!twoHandDiv, `2H main hand item ${target.twoHandId} not found in slot-detail`);
  if (twoHandDiv) {
    const btn = twoHandDiv.querySelector('[data-target][data-worn="0"]');
    if (btn) btn.click();
  }

  const totalWithTwoHand = readTotal();
  check(
    "two-hander-blocks-offhand",
    totalWithOneHand != null && totalWithTwoHand != null && totalWithTwoHand === totalWithOneHand - 1,
    `equipping a 2H main hand should drop the BiS total by exactly 1 (offhand excluded): 1H total=${totalWithOneHand}, 2H total=${totalWithTwoHand}`
  );

  const ohCell = $(`#gear-doll .slot-cell[data-slot="offhand"]`);
  check("two-hander-blocks-offhand", !!ohCell, "no offhand cell rendered after equipping a 2H main hand");
  if (ohCell) {
    check(
      "two-hander-blocks-offhand",
      ohCell.classList.contains("blocked") && /no off-hand/i.test(ohCell.textContent),
      `offhand cell should show the blocked message once a 2H main hand is chosen; got: ${JSON.stringify(ohCell.textContent)}`
    );
  }
  console.log(`[smoke] two-hander-blocks-offhand: ${target.classId}/${target.specId}/${target.bracketId} — total ${totalWithOneHand} -> ${totalWithTwoHand}`);
});

// ---- (h) profession toggle hides BoP crafted items you can't make ----
safeCall("profession-gating", () => {
  let target = null;
  outer: for (const cd of WOWDATA.bis.filter((b) => b.expansion === "tbc")) {
    for (const spec of cd.specs) {
      for (const br of spec.brackets || []) {
        for (const [slotKey, items] of Object.entries(br.slots || {})) {
          for (const it of items) {
            if (it.bop && it.source && it.source.profession) {
              target = { classId: cd.class, specId: spec.id, bracketId: br.id, slotKey, itemId: it.id, name: it.name, profession: it.source.profession };
              break outer;
            }
          }
        }
      }
    }
  }
  check("profession-gating", !!target, "no BoP crafted item with a source.profession found anywhere in tbc data");
  if (!target) return;

  const race = raceFor(target.classId);
  navigateTo({ faction: race.faction, raceId: race.id, classId: target.classId, specId: target.specId, bracketId: target.bracketId });

  const cell = $(`#gear-doll .slot-cell[data-slot="${target.slotKey}"]`);
  check("profession-gating", !!cell, `no "${target.slotKey}" cell rendered for the profession test character`);
  if (cell) cell.click();

  let detail = $("#slot-detail");
  check(
    "profession-gating",
    !!findItemDivById(detail, target.itemId),
    `"${target.name}" (needs ${target.profession}) should be visible before any profession is selected — unset professions means "show all"`
  );

  const otherProfession = (CORE.professions.map((p) => p.id)).find((p) => p !== target.profession);
  const profBtn = $("#prof-grid").querySelector(`[data-prof="${otherProfession}"]`);
  check("profession-gating", !!profBtn, `no [data-prof="${otherProfession}"] button in #prof-grid`);
  if (profBtn) profBtn.click();

  detail = $("#slot-detail");
  check(
    "profession-gating",
    !findItemDivById(detail, target.itemId),
    `"${target.name}" (BoP, needs ${target.profession}) should be hidden after selecting "${otherProfession}" as the only profession`
  );
  console.log(`[smoke] profession-gating: "${target.name}" needs ${target.profession}; hidden once only "${otherProfession}" is selected`);

  // restore: clear professions so we leave the app in a neutral state
  const clearBtn = $("#prof-grid").querySelector("[data-prof-clear]");
  if (clearBtn) clearBtn.click();
  else if (profBtn) profBtn.click();

  detail = $("#slot-detail");
  check(
    "profession-gating",
    !!findItemDivById(detail, target.itemId),
    `"${target.name}" should reappear once professions are cleared again`
  );
});

// ===========================================================================
// SECTION 6: report
// ===========================================================================

console.log("\n[smoke] ==================== SUMMARY ====================");
console.log(`[smoke] requested character: ${args.faction} ${args.class}${args.spec ? "/" + args.spec : ""} @ ${args.bracket}`);
console.log(`[smoke] resolved character:  ${JSON.stringify(resolved)}`);
console.log(`[smoke] checks performed:    ${checks}`);
console.log(`[smoke] app console warnings: ${appWarnings.length}`);
if (appWarnings.length) {
  for (const w of appWarnings.slice(0, 10)) console.log(`[smoke]   warn: ${w}`);
}
console.log(`[smoke] errors caught:       ${errors.length}`);

if (errors.length > 0) {
  console.log("\n[smoke] ---------------- FAILURES ----------------");
  errors.forEach((e, i) => {
    console.log(`\n[smoke] (${i + 1}) trigger: ${e.context}`);
    console.log(
      e.message
        .split("\n")
        .map((l) => "[smoke]     " + l)
        .join("\n")
    );
  });
}

console.log("\n[smoke] ===================================================");
if (errors.length > 0) {
  console.log(`[smoke] FAIL — ${errors.length} error(s)/assertion failure(s). See above.`);
  process.exitCode = 1;
} else {
  console.log("[smoke] PASS — app booted and every exercised control behaved as expected.");
  process.exitCode = 0;
}
