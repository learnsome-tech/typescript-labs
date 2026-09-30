# m07l02 · Declaration Files, Ambient Namespaces And Module Augmentation

Module 7: Modules, Tooling And The OpenAPI Spine · lesson 7.2 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m07l02)

**Goal:** You can author declaration files, ambient namespaces, and module augmentations to extend third-party types and global scopes.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l02-02](m07l02-02/) | Augmentation | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Augment process environment variables

1. Declare an ambient NodeJS namespace containing a ProcessEnv interface.
2. Add typed fields for DATABASE_URL as string and PORT as string.
3. Write a function readConfig accessing process.env.DATABASE_URL.
4. Confirm the compiler recognizes these keys without manual casts.

> **Hint:** Use namespace NodeJS containing interface ProcessEnv to merge declarations.

## Check yourself

- What is the difference between a dot ts source file and a dot d dot ts declaration file?
- Why are interfaces able to merge declarations while type aliases cannot?
- How does module augmentation allow you to type session data on third-party HTTP requests?
- What risk exists when augmenting global namespaces, and how should it be managed?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
