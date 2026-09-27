# Exercises — Exhaustive Narrowing With never In Production Handlers

Lesson `m04l05` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m04l05)

## Exercise 1: Build a deployment status notifier

1. Create a DeploymentEvent union: started, healthCheckPassed, or failed.
2. Add a durationSeconds number only to healthCheckPassed.
3. Add an errorMessage string only to failed.
4. Implement an exhaustive switch statement returning formatted Slack notifications.

> **Hint**: Ensure the default branch calls assertNever to maintain the compile-time safety guarantee.


---

© LearnSome.tech · support@iwantto.learnsome.tech
