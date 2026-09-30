# m03l01 · Type Aliases Versus Interfaces: Declaration Merging

Module 3: Object Shapes, Interfaces And Types · lesson 3.1 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m03l01)

**Goal:** You can evaluate the architectural tradeoffs between interfaces and type aliases, and employ declaration merging to extend third-party application contracts.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l01-02](m03l01-02/) | Context | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Extend an analytics event registry

1. Declare a base interface EventRegistry with pageView and click events.
2. In a separate code block, reopen EventRegistry to add a purchase event.
3. Create a dispatchEvent function that accepts the event name and payload.
4. Observe how TypeScript enforces the merged payload contract.

> **Hint:** Declaration merging allows plugin modules to register new event payloads without modifying core files.

## Check yourself

- What is declaration merging and how does it work with interfaces?
- Why can you not define a union type using an interface?
- How does declaration merging enable plugins to extend framework request types?
- When should you prefer a type alias over an interface?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
