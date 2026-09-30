# m02l05-03 · Payment

**Lesson:** [never: The Bottom Type And Exhaustive Switch Checking](https://learnsome.tech/learn/typescript-course/m02l05) (lesson 2.5, module 2: Primitives, Literals And Top/Bottom Types) · Pro  
**Check:** Graded

## Goal

You can describe the mathematical role of never as the bottom type, implement the assertNever pattern for exhaustive switch statements, and catch unhandled union variants at compile time.

## Files

- [`starter/payment.ts`](starter/payment.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m02l05/m02l05-03/starter`
2. Read `payment.ts`.
3. Run it: `node payment.ts`.
4. Check it from the repository root: `./check m02l05-03`.

## Expected output

```text
Processing credit card gateway
Authorizing biometric device token
```

## How to check

`./check m02l05-03` copies `starter/` into a scratch directory and runs `node payment.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m02l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
