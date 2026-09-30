# m03l02-03 · Audit

**Lesson:** [Optional Properties, Readonly And Index Signatures](https://learnsome.tech/learn/typescript-course/m03l02) (lesson 3.2, module 3: Object Shapes, Interfaces And Types) · Pro  
**Check:** Graded

## Goal

You can protect entity state with readonly modifiers, model dynamic dictionaries using index signatures, and handle dictionary lookups safely.

## Files

- [`starter/audit.ts`](starter/audit.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m03l02/m03l02-03/starter`
2. Read `audit.ts`.
3. Run it: `node audit.ts`.
4. Check it from the repository root: `./check m03l02-03`.

## Expected output

```text
[aud_501] Action: cluster.deploy
IP: 10.0.1.25
```

## How to check

`./check m03l02-03` copies `starter/` into a scratch directory and runs `node audit.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m03l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
