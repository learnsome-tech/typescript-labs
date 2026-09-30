# m03l02 · Optional Properties, Readonly And Index Signatures

Module 3: Object Shapes, Interfaces And Types · lesson 3.2 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m03l02)

**Goal:** You can protect entity state with readonly modifiers, model dynamic dictionaries using index signatures, and handle dictionary lookups safely.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l02-03](m03l02-03/) | Audit | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a typed request headers manager

1. Create an interface HeaderMap using an index signature string to string.
2. Add explicit optional known headers: authorization and contentType.
3. Write a sanitizeHeaders function that strips sensitive keys.
4. Verify that known and dynamic headers can be set and read safely.

> **Hint:** Explicit properties in an interface with an index signature must be assignable to the index signature return type.

## Check yourself

- Does the readonly modifier freeze nested objects automatically?
- What syntax is used to declare an index signature in TypeScript?
- Why must explicit interface properties be compatible with an index signature in the same type?
- How does noUncheckedIndexedAccess safeguard lookups on index signatures?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
