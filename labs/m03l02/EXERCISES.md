# Exercises — Optional Properties, Readonly And Index Signatures

Lesson `m03l02` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m03l02)

## Exercise 1: Build a typed request headers manager

1. Create an interface HeaderMap using an index signature string to string.
2. Add explicit optional known headers: authorization and contentType.
3. Write a sanitizeHeaders function that strips sensitive keys.
4. Verify that known and dynamic headers can be set and read safely.

> **Hint**: Explicit properties in an interface with an index signature must be assignable to the index signature return type.


---

© LearnSome.tech · support@iwantto.learnsome.tech
