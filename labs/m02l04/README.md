# m02l04 · void, undefined And null: Exact Optional Property Types

Module 2: Primitives, Literals And Top/Bottom Types · lesson 2.4 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m02l04)

**Goal:** You can correctly differentiate between void, undefined, and null in API schemas, and leverage exactOptionalPropertyTypes to separate omitted keys from explicit undefined values.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l04-03](m02l04-03/) | Patcher | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a patch payload validator

1. Define an interface ProfileUpdate with optional avatarUrl and phone properties.
2. avatarUrl should accept string or null, while phone accepts string.
3. Write a sanitizePayload function that builds an operational database update query.
4. Verify that omitting a key generates no update instruction.

> **Hint:** Check hasOwnProperty or compare against undefined to confirm whether an optional key was explicitly supplied.

## Check yourself

- What is the semantic difference between void and undefined as return types?
- Why is distinguishing between null and undefined critical in HTTP PATCH operations?
- What behavior does the exactOptionalPropertyTypes compiler flag enforce?
- How does void allow callbacks to return values without causing type errors?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
