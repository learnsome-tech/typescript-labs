# Exercises — never: The Bottom Type And Exhaustive Switch Checking

Lesson `m02l05` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m02l05)

## Exercise 1: Implement an exhaustive task state machine

1. Define a TaskStatus union: pending, active, completed, or failed.
2. Implement an assertNever helper function.
3. Write a getStatusBadgeColor function mapping each status to a hex string.
4. Add an archived status and verify that TypeScript points directly to the switch.

> **Hint**: The default branch will produce a compile error until case 'archived' is added.


---

© LearnSome.tech · support@iwantto.learnsome.tech
