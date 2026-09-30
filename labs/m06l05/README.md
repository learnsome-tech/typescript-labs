# m06l05 · Mapped Types, Key Remapping With as And Template Literals

Module 6: Advanced Type Programming And Utilities · lesson 6.5 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m06l05)

**Goal:** You can combine mapped types, key remapping with as, and template literal types to generate strongly typed event listeners and accessors.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l05-02](m06l05-02/) | Event Listeners | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a typed getter generator

1. Declare an interface AccountState with id of type string and balance of type number.
2. Author a mapped type Getters parameterized by T.
3. Remap each key K to get followed by Capitalize of K returning T bracket K.
4. Implement an object satisfying Getters for AccountState and call getId.

> **Hint:** Use template literals with get and Capitalize of string & K as the new key.

## Check yourself

- How does key remapping with as alter the keys of a mapped type?
- What intrinsic string manipulation utilities are available in template literal types?
- How does remapping a property key to never affect the generated type?
- What is the difference between plus question mark and minus question mark in mapped types?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
