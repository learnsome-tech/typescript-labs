# Exercises — Type Aliases Versus Interfaces: Declaration Merging

Lesson `m03l01` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m03l01)

## Exercise 1: Extend an analytics event registry

1. Declare a base interface EventRegistry with pageView and click events.
2. In a separate code block, reopen EventRegistry to add a purchase event.
3. Create a dispatchEvent function that accepts the event name and payload.
4. Observe how TypeScript enforces the merged payload contract.

> **Hint**: Declaration merging allows plugin modules to register new event payloads without modifying core files.


---

© LearnSome.tech · support@iwantto.learnsome.tech
