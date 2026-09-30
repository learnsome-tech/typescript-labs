# m01l04 · Type Annotations, Type Inference And Contextual Typing

Module 1: The Compiler And Mental Model · lesson 1.4 · Free · [Open the lesson](https://learnsome.tech/learn/typescript-course/m01l04)

**Goal:** You can distinguish between explicit type annotations and type inference, leverage contextual typing in higher-order functions, and avoid redundant type annotations.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l04-02](m01l04-02/) | Inference | Graded |
| [m01l04-04](m01l04-04/) | Contextual | Runs, not graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Audit redundant annotations

1. Take a file with explicit primitive annotations on every local variable.
2. Remove annotations where the assigned initial value provides the exact type.
3. Keep explicit annotations on exported function signatures.
4. Verify that tsc compiles with zero errors before and after your refactor.

> **Hint:** If removing an annotation does not alter the tooltip type in your editor, the annotation was purely redundant.

## Check yourself

- Why is annotating every local variable considered an anti-pattern in TypeScript?
- How does the inferred type of a string declared with const differ from one declared with let?
- What is contextual typing and where is it most commonly encountered?
- Which parts of a codebase should almost always have explicit type annotations?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
