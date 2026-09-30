# m05l04-02 · Api Envelope

**Lesson:** [Default Generic Arguments And Multi-Type Parameters](https://learnsome.tech/learn/typescript-course/m05l04) (lesson 5.4, module 5: Generics And Parameterized Types) · Pro  
**Check:** Graded

## Goal

You can design multi-parameter generics with sensible defaults to build flexible API client wrappers and response envelopes.

## Files

- [`starter/api_envelope.ts`](starter/api_envelope.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m05l04/m05l04-02/starter`
2. Read `api_envelope.ts`.
3. Run it: `node api_envelope.ts`.
4. Check it from the repository root: `./check m05l04-02`.

## Expected output

```text
Default status: success
Custom error fields: email, password
```

## How to check

`./check m05l04-02` copies `starter/` into a scratch directory and runs `node api_envelope.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m05l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
