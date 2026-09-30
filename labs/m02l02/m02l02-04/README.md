# m02l02-04 · Config

**Lesson:** [Literal Types: String, Number, Boolean Literals And const](https://learnsome.tech/learn/typescript-course/m02l02) (lesson 2.2, module 2: Primitives, Literals And Top/Bottom Types) · Pro  
**Check:** Runs, not graded

## Goal

You can employ literal types to represent exact domain values like HTTP methods and status codes, and use const assertions to prevent type widening in configuration dictionaries.

## Files

- [`starter/config.ts`](starter/config.ts): the listing from the lesson
- [`starter/dispatcher.ts`](starter/dispatcher.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/setup.sh`](starter/setup.sh)
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m02l02/m02l02-04/starter`
2. Read `config.ts`.
3. Run it: `node config.ts`.
4. Check it from the repository root: `./check m02l02-04`.

## What the lesson recorded

Shown for reference; the check does not compare it.

```text
Target: production, Retries allowed: 3
```

## How to check

`./check m02l02-04` copies `starter/` into a scratch directory and runs `node config.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It runs without a pass or fail: the lesson recorded its output with `bash setup.sh >/dev/null 2>&1; bun run config.ts`, not the way the site runs it, so the output is not compared. `./check` shows the output and the exit code.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m02l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
