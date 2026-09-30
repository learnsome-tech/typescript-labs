#!/usr/bin/env bash
set -u
bash setup.sh >/dev/null 2>&1
bun run verify_env.ts
