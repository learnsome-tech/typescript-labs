# m02l05 · never: The Bottom Type And Exhaustive Switch Checking

Module 2: Primitives, Literals And Top/Bottom Types · lesson 2.5 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m02l05)

**Goal:** You can describe the mathematical role of never as the bottom type, implement the assertNever pattern for exhaustive switch statements, and catch unhandled union variants at compile time.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l05-03](m02l05-03/) | Payment | Graded |
| [m02l05-04](m02l05-04/) | Payment | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement an exhaustive task state machine

1. Define a TaskStatus union: pending, active, completed, or failed.
2. Implement an assertNever helper function.
3. Write a getStatusBadgeColor function mapping each status to a hex string.
4. Add an archived status and verify that TypeScript points directly to the switch.

> **Hint:** The default branch will produce a compile error until case 'archived' is added.

## Check yourself

- What is the mathematical definition of never in TypeScript?
- How does the assertNever helper guarantee compile-time exhaustiveness?
- What compiler error code appears when an unhandled union member reaches never?
- Why is exhaustiveness checking critical when refactoring large production systems?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
