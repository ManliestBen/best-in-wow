#!/usr/bin/env sh
# Serve the BiS Companion app locally.
cd "$(dirname "$0")/app" || exit 1
PORT="${1:-8735}"
echo "BiS Companion → http://localhost:$PORT"
exec python3 -m http.server "$PORT"
