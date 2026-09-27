#!/usr/bin/env bash
# Production TypeScript — lesson m01l01 — Why TypeScript: Contracts, Erased Types And Soundness
# https://learnsome.tech/courses/typescript-course/watch?lesson=m01l01
# © LearnSome.tech
set -u
bash setup.sh >/dev/null 2>&1
bun run contract_error.ts
