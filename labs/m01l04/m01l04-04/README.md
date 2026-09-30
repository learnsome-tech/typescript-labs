# m01l04-04 · Contextual

**Lesson:** [Type Annotations, Type Inference And Contextual Typing](https://learnsome.tech/learn/typescript-course/m01l04) (lesson 1.4, module 1: The Compiler And Mental Model) · Free  
**Check:** Runs, not graded

## Goal

You can distinguish between explicit type annotations and type inference, leverage contextual typing in higher-order functions, and avoid redundant type annotations.

## Files

- [`starter/contextual.ts`](starter/contextual.ts): the listing from the lesson
- [`starter/inference.ts`](starter/inference.ts)
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/setup.sh`](starter/setup.sh)
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l04/m01l04-04/starter`
2. Read `contextual.ts`.
3. Run it: `node contextual.ts`.
4. Check it from the repository root: `./check m01l04-04`.

## What the lesson recorded

Shown for reference; the check does not compare it.

```text
NOTEBOOK, BACKPACK
```

## How to check

`./check m01l04-04` copies `starter/` into a scratch directory and runs `node contextual.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It runs without a pass or fail: the lesson recorded its output with `bash setup.sh >/dev/null 2>&1; bun run contextual.ts`, not the way the site runs it, so the output is not compared. `./check` shows the output and the exit code.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m01l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
