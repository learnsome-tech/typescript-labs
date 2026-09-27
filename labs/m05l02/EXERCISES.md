# Exercises — Generic Interfaces, Classes And Type Aliases

Lesson `m05l02` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m05l02)

## Exercise 1: Build a generic memory cache with TTL

1. Create a generic interface CacheEntry parameterized by type T holding data and expiresAt.
2. Create a generic class MemoryCache parameterized by type K and type V.
3. Implement set, get, and has methods.
4. Verify that looking up a key returns type V or undefined.

> **Hint**: Store entries internally in a Map where the key has type K and value has type CacheEntry of V.


---

© LearnSome.tech · support@iwantto.learnsome.tech
