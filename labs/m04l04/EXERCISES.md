# Exercises — Assertion Signatures: asserts condition And Invariants

Lesson `m04l04` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m04l04)

## Exercise 1: Build a tenant context assert library

1. Write an assertTenant function checking tenantId presence on a session.
2. Use asserts session is AuthenticatedSession signature.
3. Throw an UnauthorizedError if tenantId is missing or empty.
4. Verify that calling assertTenant unlocks tenant-scoped operations.

> **Hint**: The function must have no return statement; it either returns void implicitly or throws.


---

© LearnSome.tech · support@iwantto.learnsome.tech
