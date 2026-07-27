/* BiS Companion — global data registry. Must load before any data file. */
window.WOWDATA = {
  core: null,
  bis: [],
  quests: [],

  register(obj) {
    if (!obj || typeof obj !== 'object' || !obj.kind) {
      console.warn('WOWDATA.register: ignored malformed payload', obj);
      return;
    }
    if (obj.kind === 'core') this.core = obj;
    else if (obj.kind === 'bis') this.mergeBis(obj);
    else if (obj.kind === 'quests') this.quests.push(obj);
    else console.warn('WOWDATA.register: unknown kind', obj.kind);
  },

  // A class may be registered from several files (endgame + leveling): specs
  // merge by id, brackets concatenate, metadata fills empty fields only.
  mergeBis(obj) {
    const existing = this.bis.find(b => b.expansion === obj.expansion && b.class === obj.class);
    if (!existing) { this.bis.push(obj); return; }
    for (const spec of obj.specs || []) {
      const target = existing.specs.find(s => s.id === spec.id);
      if (!target) { existing.specs.push(spec); continue; }
      target.brackets = target.brackets || [];
      for (const br of spec.brackets || []) {
        if (target.brackets.some(b => b.id === br.id)) {
          console.warn(`WOWDATA: duplicate bracket "${br.id}" for ${obj.class}/${spec.id} — ignored`);
        } else {
          target.brackets.push(br);
        }
      }
      target.statPriority = target.statPriority || spec.statPriority;
      target.notes = target.notes || spec.notes;
      target.icon = target.icon || spec.icon;
      if (spec.enchants) target.enchants = { ...spec.enchants, ...(target.enchants || {}) };
    }
  },

  classData(expansion, cls) {
    return this.bis.find(b => b.expansion === expansion && b.class === cls) || null;
  },

  classesFor(expansion) {
    return this.bis.filter(b => b.expansion === expansion).map(b => b.class);
  },

  questsFor(expansion) {
    return this.quests
      .filter(q => q.expansion === expansion)
      .flatMap(q => q.instances || []);
  },
};
