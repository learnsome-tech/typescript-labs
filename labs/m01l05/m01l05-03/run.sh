#!/usr/bin/env bash
# Production TypeScript — lesson m01l05 — Verify Your Environment: Running tsc And Bun TypeScript
# https://learnsome.tech/courses/typescript-course/watch?lesson=m01l05
# © LearnSome.tech
set -u
bash setup.sh >/dev/null 2>&1
bun run verify_env.ts
