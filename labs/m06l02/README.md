# m06l02 · Union Utilities: Exclude, Extract, NonNullable And Awaited

Module 6: Advanced Type Programming And Utilities · lesson 6.2 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m06l02)

**Goal:** You can manipulate union types and unpack promise resolutions using Exclude, Extract, NonNullable, and Awaited.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l02-02](m06l02-02/) | Unions | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Partition user roles and sanitize query inputs

1. Declare a union Role: admin, manager, member, and guest.
2. Derive StaffRole by excluding guest using Exclude.
3. Declare a QueryParam type containing string, string array, null, or undefined.
4. Use NonNullable to create SafeParam, verifying nullish values are removed.

> **Hint:** Use Exclude with the union type and guest literal, and NonNullable on QueryParam.

## Check yourself

- How does Exclude differ from Omit in terms of the types they operate upon?
- Why does NonNullable accept any type rather than just union types?
- How does Awaited handle a type that is already non-promise, such as number?
- What architectural benefit comes from extracting DTO types via Awaited and ReturnType?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
