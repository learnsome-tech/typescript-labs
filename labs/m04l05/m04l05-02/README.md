# m04l05-02 · Event Dispatcher

**Lesson:** [Exhaustive Narrowing With never In Production Handlers](https://learnsome.tech/learn/typescript-course/m04l05) (lesson 4.5, module 4: Type Narrowing And Control Flow) · Pro  
**Check:** Graded

## Goal

You can synthesize all narrowing techniques to build bulletproof domain event dispatchers with guaranteed compile-time exhaustiveness.

## Files

- [`starter/event_dispatcher.ts`](starter/event_dispatcher.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l05/m04l05-02/starter`
2. Read `event_dispatcher.ts`.
3. Run it: `node event_dispatcher.ts`.
4. Check it from the repository root: `./check m04l05-02`.

## Expected output

```text
Booked $49
```

## How to check

`./check m04l05-02` copies `starter/` into a scratch directory and runs `node event_dispatcher.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/typescript-course/m04l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
