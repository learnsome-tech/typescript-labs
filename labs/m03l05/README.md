# m03l05 · Tuples: Fixed Length, Labeled Elements And Variadic Tuples

Module 3: Object Shapes, Interfaces And Types · lesson 3.5 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m03l05)

**Goal:** You can declare fixed-length positional data with tuples, document intent using labeled tuple elements, and manipulate dynamic argument lists with variadic tuples.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l05-02](m03l05-02/) | Tuples | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a typed event tuple dispatcher

1. Declare a tuple type ConnectionEvent: [timestamp: number, host: string, port: number].
2. Create a readonly version of the tuple using the readonly prefix.
3. Write a recordConnection function that accepts the tuple and logs a summary.
4. Verify that attempting to push or reassign an element triggers a compiler error.

> **Hint:** Prefixing a tuple with readonly prevents mutating methods like push or pop.

## Check yourself

- What is the difference between a standard array type and a tuple?
- How do labeled tuple elements improve developer experience in IDEs?
- What is a variadic tuple and how do rest elements work within it?
- How do you make a tuple completely immutable in TypeScript?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
