# m05l01-02 · Envelope

**Lesson:** [Why Generics: Functions, Identities And Type Variables](https://learnsome.tech/learn/typescript-course/m05l01) (lesson 5.1, module 5: Generics And Parameterized Types) · Pro  
**Check:** Graded

## Goal

You can author generic functions and parameterized types that capture and propagate concrete types while eliminating type duplication.

## Files

- [`starter/envelope.ts`](starter/envelope.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m05l01/m05l01-02/starter`
2. Read `envelope.ts`.
3. Run it: `node envelope.ts`.
4. Check it from the repository root: `./check m05l01-02`.

## Expected output

```text
User: dev
Count: 42
```

## How to check

`./check m05l01-02` copies `starter/` into a scratch directory and runs `node envelope.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m05l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
