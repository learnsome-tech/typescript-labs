# m04l03-02 · Predicates

**Lesson:** [Custom Type Predicates: Functions Returning is Type](https://learnsome.tech/learn/typescript-course/m04l03) (lesson 4.3, module 4: Type Narrowing And Control Flow) · Pro  
**Check:** Graded

## Goal

You can author custom type predicate functions returning parameter is Type to encapsulate validation logic and narrow arrays without unsafe type assertions.

## Files

- [`starter/predicates.ts`](starter/predicates.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l03/m04l03-02/starter`
2. Read `predicates.ts`.
3. Run it: `node predicates.ts`.
4. Check it from the repository root: `./check m04l03-02`.

## Expected output

```text
Active count: 2
Names: Taylor, Casey
```

## How to check

`./check m04l03-02` copies `starter/` into a scratch directory and runs `node predicates.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m04l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
