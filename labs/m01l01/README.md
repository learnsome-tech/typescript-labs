# m01l01 · Why TypeScript: Contracts, Erased Types And Soundness

Module 1: The Compiler And Mental Model · lesson 1.1 · Free · [Open the lesson](https://learnsome.tech/learn/typescript-course/m01l01)

**Goal:** You can explain how TypeScript acts as a compile-time static type system, why types vanish at runtime through erasure, and how structural typing differs from nominal typing.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l01-02](m01l01-02/) | Contract | Graded |
| [m01l01-03](m01l01-03/) | Contract | Runs, not graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Create an article interface

1. Define an interface named Article with title, slug, and wordCount properties.
2. Write a summary function that accepts an Article and returns a formatted string.
3. Call the function with an object literal that includes an extra unpublished property.
4. Observe how TypeScript handles excess properties in object literals.

> **Hint:** Assigning an object literal directly to a type triggers excess property checking, while assigning via an intermediate variable uses standard structural compatibility.

## Check yourself

- What is type erasure and how does it affect runtime bundle performance?
- How does structural typing in TypeScript differ from nominal typing in Java?
- Why does TypeScript not validate network request payloads at runtime on its own?
- What triggers excess property checking on object literals?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
