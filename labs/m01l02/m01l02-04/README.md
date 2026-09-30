# m01l02-04 · Calculator

**Lesson:** [The Compiler Pipeline: tsc, AST And Code Emission](https://learnsome.tech/learn/typescript-course/m01l02) (lesson 1.2, module 1: The Compiler And Mental Model) · Free  
**Check:** Runs, not graded

## Goal

You can describe the four phases of the TypeScript compiler pipeline from source text to AST to type checking and emission, and configure noEmitOnError.

## Files

- [`starter/calculator.ts`](starter/calculator.ts): the listing from the lesson
- [`starter/check_types.ts`](starter/check_types.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/setup.sh`](starter/setup.sh)
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l02/m01l02-04/starter`
2. Read `calculator.ts`.
3. Run it: `node calculator.ts`.
4. Check it from the repository root: `./check m01l02-04`.

## What the lesson recorded

Shown for reference; the check does not compare it.

```text
Healthy: true
```

## How to check

`./check m01l02-04` copies `starter/` into a scratch directory and runs `node calculator.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It runs without a pass or fail: the lesson recorded its output with `bash setup.sh >/dev/null 2>&1; bun run check_types.ts`, not the way the site runs it, so the output is not compared. `./check` shows the output and the exit code.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m01l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
