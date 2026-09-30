# m06l03 · Function Utilities: ReturnType, Parameters And Constructor

Module 6: Advanced Type Programming And Utilities · lesson 6.3 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m06l03)

**Goal:** You can extract function parameters and return types to author type-safe middleware interceptors and metrics wrappers.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l03-02](m06l03-02/) | Interceptor | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a retry wrapper for network operations

1. Declare an asynchronous function sendWebhook accepting url and payload.
2. Author a higher-order function withRetry accepting any async function fn.
3. Annotate the returned wrapper using Parameters and ReturnType.
4. Confirm that calling withRetry preserves parameter auto-complete.

> **Hint:** Use Parameters of F for the rest parameters and ReturnType of F for the promise result.

## Check yourself

- Why must you use typeof before passing a function name to Parameters or ReturnType?
- What data structure does Parameters produce: an object, a union, or a tuple?
- How does InstanceType differ from the class identifier itself?
- What happens if an engineer adds a third parameter to a function wrapped by withMetrics?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
