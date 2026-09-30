# m04l01 · Typeof Guards, Truthiness And Equality Narrowing

Module 4: Type Narrowing And Control Flow · lesson 4.1 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m04l01)

**Goal:** You can leverage control flow analysis to narrow union types using typeof type guards, truthiness checks, and literal equality comparisons.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l01-02](m04l01-02/) | Sanitizer | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a configuration value parser

1. Create a parseConfigValue function accepting string, boolean, number, or null.
2. Use typeof guards to format boolean values as active or inactive strings.
3. Format numbers with two decimal places using toFixed.
4. Trim strings and handle null by returning a fallback empty string.

> **Hint:** Check for null first, then handle boolean, number, and string using sequential typeof branches.

## Check yourself

- What is Control Flow Analysis in TypeScript?
- Why does typeof null evaluate to object and how do you safeguard against it?
- How does early return benefit type narrowing in subsequent code?
- What occurs during equality narrowing between two different union types?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
