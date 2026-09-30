# m05l02 · Generic Interfaces, Classes And Type Aliases

Module 5: Generics And Parameterized Types · lesson 5.2 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m05l02)

**Goal:** You can design generic interfaces, type aliases, and classes to build reusable data access repositories and stateful containers.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l02-02](m05l02-02/) | Repository | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a generic memory cache with TTL

1. Create a generic interface CacheEntry parameterized by type T holding data and expiresAt.
2. Create a generic class MemoryCache parameterized by type K and type V.
3. Implement set, get, and has methods.
4. Verify that looking up a key returns type V or undefined.

> **Hint:** Store entries internally in a Map where the key has type K and value has type CacheEntry of V.

## Check yourself

- What architectural advantage does a generic repository provide over creating separate repositories for each entity?
- Why can a generic type alias represent a Result type while an interface cannot?
- What prevents a developer from accidentally passing a numeric ID to a repository expecting a string ID?
- How does the private map inside a generic class enforce type safety across its public methods?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
