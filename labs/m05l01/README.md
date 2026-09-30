# m05l01 · Why Generics: Functions, Identities And Type Variables

Module 5: Generics And Parameterized Types · lesson 5.1 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m05l01)

**Goal:** You can author generic functions and parameterized types that capture and propagate concrete types while eliminating type duplication.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l01-02](m05l01-02/) | Envelope | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a typed array head selector

1. Create a generic function named firstItem accepting an array of type T.
2. Return type T or undefined if the array is empty.
3. Verify that calling firstItem on an array of numbers returns number or undefined.
4. Verify that calling firstItem on an array of strings returns string or undefined.

> **Hint:** Declare the type variable before the argument list and annotate the parameter as an array of T.

## Check yourself

- Why does using a generic type variable provide greater type safety than using the any type?
- How does the TypeScript compiler infer the value of a type variable during a function call?
- When is it mandatory to supply an explicit type argument rather than relying on inference?
- What impact do generic type annotations have on the emitted JavaScript runtime bundle?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
