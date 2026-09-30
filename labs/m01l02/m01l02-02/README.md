# m01l02-02 · Calculator

**Lesson:** [The Compiler Pipeline: tsc, AST And Code Emission](https://learnsome.tech/learn/typescript-course/m01l02) (lesson 1.2, module 1: The Compiler And Mental Model) · Free  
**Check:** Graded

## Goal

You can describe the four phases of the TypeScript compiler pipeline from source text to AST to type checking and emission, and configure noEmitOnError.

## Files

- [`starter/calculator.ts`](starter/calculator.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l02/m01l02-02/starter`
2. Read `calculator.ts`.
3. Run it: `node calculator.ts`.
4. Check it from the repository root: `./check m01l02-02`.

## Expected output

```text
Sum: 30, Tax: 0.2
```

## How to check

`./check m01l02-02` copies `starter/` into a scratch directory and runs `node calculator.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m01l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
