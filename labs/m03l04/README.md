# m03l04 · Discriminated Unions: Tagged Variants And Pattern Matching

Module 3: Object Shapes, Interfaces And Types · lesson 3.4 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m03l04)

**Goal:** You can design discriminated unions to make illegal states unrepresentable in frontend and backend workflows, and pattern match cleanly on discriminant tags.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l04-02](m03l04-02/) | Result | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Model a file upload lifecycle

1. Create an UploadState union with four variants: queued, uploading, finished, and failed.
2. Include a progress percentage number only on the uploading variant.
3. Include a publicUrl string only on the finished variant.
4. Write a formatProgress function that prints formatted status for each state.

> **Hint:** Attempting to access progress on finished will trigger a compiler error because progress only exists on uploading.

## Check yourself

- What are the three essential components of a discriminated union?
- Why are optional flags like isLoading and error inferior to tagged variants?
- How does TypeScript narrow the type of an object inside a switch statement?
- What error occurs if you try to access a variant property outside its narrowed branch?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
