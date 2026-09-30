# m04l03 · Custom Type Predicates: Functions Returning is Type

Module 4: Type Narrowing And Control Flow · lesson 4.3 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m04l03)

**Goal:** You can author custom type predicate functions returning parameter is Type to encapsulate validation logic and narrow arrays without unsafe type assertions.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l03-02](m04l03-02/) | Predicates | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Write a pagination response guard

1. Define an interface PaginatedResponse with items array and total number.
2. Write an isPaginatedResponse type predicate accepting unknown.
3. Verify that raw is a non-null object with valid items and total fields.
4. Use the predicate to parse unknown API payloads without type assertions.

> **Hint:** Check typeof raw === 'object' && raw !== null before inspecting nested properties.

## Check yourself

- Why does a function returning boolean not narrow types in the calling scope?
- What is the exact syntax for a type predicate return type?
- How do type predicates enable Array.prototype.filter to eliminate null values?
- Why are custom type predicates safer than manual type assertions with as?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
