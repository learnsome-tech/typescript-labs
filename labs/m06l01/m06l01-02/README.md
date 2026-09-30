# m06l01-02 · User Dtos

**Lesson:** [Core Utilities: Partial, Required, Readonly, Pick And Omit](https://learnsome.tech/learn/typescript-course/m06l01) (lesson 6.1, module 6: Advanced Type Programming And Utilities) · Pro  
**Check:** Graded

## Goal

You can transform domain models into specialized creation, patch, and read DTOs using Partial, Required, Readonly, Pick, and Omit.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`starter/user_dtos.ts`](starter/user_dtos.ts): the listing from the lesson
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m06l01/m06l01-02/starter`
2. Read `user_dtos.ts`.
3. Run it: `node user_dtos.ts`.
4. Check it from the repository root: `./check m06l01-02`.

## Expected output

```text
Profile: staff@company.org (usr-404)
```

## How to check

`./check m06l01-02` copies `starter/` into a scratch directory and runs `node user_dtos.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m06l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
