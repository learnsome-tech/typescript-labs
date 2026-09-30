# m05l03 · Generic Constraints: extends, keyof And Indexed Access

Module 5: Generics And Parameterized Types · lesson 5.3 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m05l03)

**Goal:** You can apply generic constraints and indexed access types to build type-safe property accessors and record transformations.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l03-02](m05l03-02/) | Get Property | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement a typed array pluck function

1. Create a function named pluckValues accepting an array of objects and a key.
2. Constrain key parameter K to extends keyof T.
3. Return an array of values typed as an array of T bracket K.
4. Verify that plucking id from a list of accounts yields an array of strings.

> **Hint:** Map over the array and invoke indexed access for each item using the provided key.

## Check yourself

- What prevents an unconstrained type variable T from accessing properties like length or name?
- How does keyof T evaluate when applied to an interface with three string fields?
- Why does indexed access T bracket K return different types depending on the value of K?
- What happens in the compiler if a caller passes an unknown key string to getProperty?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
