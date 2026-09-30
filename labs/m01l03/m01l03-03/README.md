# m01l03-03 · Strict Demo

**Lesson:** [tsconfig.json: target, lib, strict And NodeNext](https://learnsome.tech/learn/typescript-course/m01l03) (lesson 1.3, module 1: The Compiler And Mental Model) · Free  
**Check:** Graded

## Goal

You can author a production tsconfig.json configured with strict mode, modern module resolution, and correct library declarations.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/strict_demo.ts`](starter/strict_demo.ts): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l03/m01l03-03/starter`
2. Read `strict_demo.ts`.
3. Run it: `node strict_demo.ts`.
4. Check it from the repository root: `./check m01l03-03`.

## Expected output

```text
User not found
```

## How to check

`./check m01l03-03` copies `starter/` into a scratch directory and runs `node strict_demo.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m01l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
