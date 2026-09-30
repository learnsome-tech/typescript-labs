# m02l02 · Literal Types: String, Number, Boolean Literals And const

Module 2: Primitives, Literals And Top/Bottom Types · lesson 2.2 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m02l02)

**Goal:** You can employ literal types to represent exact domain values like HTTP methods and status codes, and use const assertions to prevent type widening in configuration dictionaries.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l02-02](m02l02-02/) | Dispatcher | Graded |
| [m02l02-04](m02l02-04/) | Config | Runs, not graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Create a database connection pool config

1. Declare a union type for supported database engines: postgres, mysql, or sqlite.
2. Declare a connection state union: connecting, connected, or disconnected.
3. Create a pool config object with as const holding host, port, and engine.
4. Write a connect function that only accepts the exact engine literal from your config.

> **Hint:** Use typeof config.engine to extract the literal type from your const-asserted dictionary.

## Check yourself

- Why does TypeScript widen object property types by default?
- What two transformations does the as const assertion apply to an object?
- How does a literal union like 'GET' | 'POST' improve API safety over string?
- How can you extract a type from an existing runtime object in TypeScript?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
