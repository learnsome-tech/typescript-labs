# m01l05-03 · Verify Env

**Lesson:** [Verify Your Environment: Running tsc And Bun TypeScript](https://learnsome.tech/learn/typescript-course/m01l05) (lesson 1.5, module 1: The Compiler And Mental Model) · Free  
**Check:** Runs, not graded

## Goal

You can verify your TypeScript compiler installation, run TypeScript files directly with Bun or Node, and validate your development environment.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/setup.sh`](starter/setup.sh)
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`starter/verify_env.ts`](starter/verify_env.ts): the listing from the lesson
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l05/m01l05-03/starter`
2. Read `verify_env.ts`.
3. Run it: `node verify_env.ts`.
4. Check it from the repository root: `./check m01l05-03`.

## What the lesson recorded

Shown for reference; the check does not compare it.

```text
...
```

## How to check

`./check m01l05-03` copies `starter/` into a scratch directory and runs `node verify_env.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It runs without a pass or fail: the lesson recorded its output with `bash setup.sh >/dev/null 2>&1; bun run verify_env.ts`, not the way the site runs it, so the output is not compared. `./check` shows the output and the exit code.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m01l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
