# m06l04 · Conditional Types: Ternary Types And Type Inference With infer

Module 6: Advanced Type Programming And Utilities · lesson 6.4 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m06l04)

**Goal:** You can write conditional types with infer to extract embedded type variables and perform branch logic in the type system.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l04-02](m06l04-02/) | Conditional Infer | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a recursive deep unwrapper

1. Declare a conditional type Flatten accepting a type parameter T.
2. If T is an array of infer Item, return Item; otherwise return T.
3. Test with string array to confirm it resolves to string.
4. Test with boolean to confirm it resolves to boolean without errors.

> **Hint:** Check T extends (infer E)[] ? E : T.

## Check yourself

- What role does the infer keyword play inside a conditional type clause?
- Why does Exclude rely on distributive conditional behavior to filter unions?
- How can you prevent a conditional type from distributing across union members?
- What occurs if infer is used outside of the extends clause of a conditional type?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
