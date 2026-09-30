# m04l04 · Assertion Signatures: asserts condition And Invariants

Module 4: Type Narrowing And Control Flow · lesson 4.4 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m04l04)

**Goal:** You can implement assertion functions using asserts condition syntax to validate runtime invariants and narrow scopes without introducing nested conditional branches.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l04-02](m04l04-02/) | Assert | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a tenant context assert library

1. Write an assertTenant function checking tenantId presence on a session.
2. Use asserts session is AuthenticatedSession signature.
3. Throw an UnauthorizedError if tenantId is missing or empty.
4. Verify that calling assertTenant unlocks tenant-scoped operations.

> **Hint:** The function must have no return statement; it either returns void implicitly or throws.

## Check yourself

- How does an assertion function differ from a standard type predicate?
- What happens to the type of a variable after an assertion function executes successfully?
- Why must an assertion function throw an error on failure rather than returning false?
- How does asserts condition help flatten nested if blocks in backend services?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
