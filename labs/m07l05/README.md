# m07l05 · The Spine Artifact: Generating Typed Models From OpenAPI

Module 7: Modules, Tooling And The OpenAPI Spine · lesson 7.5 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m07l05)

**Goal:** You can derive and consume strongly typed models and API client SDKs from OpenAPI specifications to anchor full-stack applications.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l05-02](m07l05-02/) | Task Client | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a paginated task list client

1. Declare a TaskPage interface holding an array of Task items and next cursor.
2. Author a fetchTasks function returning Promise of TaskPage.
3. Simulate returning a page of two tasks with a next cursor string.
4. Verify that mapped rendering of items preserves task title and state typing.

> **Hint:** Model items as Task[] and next as string or undefined.

## Check yourself

- Why does contract-driven type generation prevent integration bugs across distributed teams?
- How does the ProblemDetails contract align client-side error handling with HTTP standards?
- How does the TaskResult discriminated union enforce exhaustive response inspection?
- How does this OpenAPI spine unite React, Next.js, Node, and Kubernetes in our track?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
