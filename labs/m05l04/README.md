# m05l04 · Default Generic Arguments And Multi-Type Parameters

Module 5: Generics And Parameterized Types · lesson 5.4 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m05l04)

**Goal:** You can design multi-parameter generics with sensible defaults to build flexible API client wrappers and response envelopes.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l04-02](m05l04-02/) | Api Envelope | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a paginated envelope with metadata

1. Create a generic interface DefaultPagination with page and total items.
2. Create a generic interface PaginatedResult with items of type T and meta of type M.
3. Default M to DefaultPagination.
4. Construct an instance holding string items without specifying type argument M.

> **Hint:** Declare PaginatedResult with T, and M equals DefaultPagination.

## Check yourself

- Why must required type parameters precede defaulted type parameters?
- How does a default type argument benefit the ergonomics of a public API client?
- Can a default generic parameter reference another type parameter declared in the same list?
- What occurs if a caller explicitly provides a type argument for a defaulted parameter?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
