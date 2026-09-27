#!/usr/bin/env bash
# Production TypeScript — lesson m01l02 — The Compiler Pipeline: tsc, AST And Code Emission
# https://learnsome.tech/courses/typescript-course/watch?lesson=m01l02
# © LearnSome.tech
set -u
bash setup.sh >/dev/null 2>&1
bun run check_types.ts
