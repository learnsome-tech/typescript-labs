# m02l01-02 · Primitives

**Lesson:** [Primitive Types: String, Number, Boolean, Bigint And Symbol](https://learnsome.tech/learn/typescript-course/m02l01) (lesson 2.1, module 2: Primitives, Literals And Top/Bottom Types) · Pro  
**Check:** Graded

## Goal

You can declare and manipulate primitive types in TypeScript and avoid the wrapper object anti-pattern.

## Files

- [`starter/primitives.ts`](starter/primitives.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m02l01/m02l01-02/starter`
2. Read `primitives.ts`.
3. Run it: `node primitives.ts`.
4. Check it from the repository root: `./check m02l01-02`.

## Expected output

```text
Max safe: 9007199254740991, BigInt: 9007199254740993
Session owner: Sam
```

## How to check

`./check m02l01-02` copies `starter/` into a scratch directory and runs `node primitives.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m02l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
