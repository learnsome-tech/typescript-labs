# m04l05 · Exhaustive Narrowing With never In Production Handlers

Module 4: Type Narrowing And Control Flow · lesson 4.5 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m04l05)

**Goal:** You can synthesize all narrowing techniques to build bulletproof domain event dispatchers with guaranteed compile-time exhaustiveness.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l05-02](m04l05-02/) | Event Dispatcher | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a deployment status notifier

1. Create a DeploymentEvent union: started, healthCheckPassed, or failed.
2. Add a durationSeconds number only to healthCheckPassed.
3. Add an errorMessage string only to failed.
4. Implement an exhaustive switch statement returning formatted Slack notifications.

> **Hint:** Ensure the default branch calls assertNever to maintain the compile-time safety guarantee.

## Check yourself

- How does control flow analysis eliminate the need for manual type casting?
- When should you use the in operator instead of a discriminated union?
- What is the difference in calling conventions between a type predicate and an assertion function?
- How does assertNever protect distributed event processing from silent failures?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
