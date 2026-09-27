# Exercises — Declaration Files, Ambient Namespaces And Module Augmentation

Lesson `m07l02` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m07l02)

## Exercise 1: Augment process environment variables

1. Declare an ambient NodeJS namespace containing a ProcessEnv interface.
2. Add typed fields for DATABASE_URL as string and PORT as string.
3. Write a function readConfig accessing process.env.DATABASE_URL.
4. Confirm the compiler recognizes these keys without manual casts.

> **Hint**: Use namespace NodeJS containing interface ProcessEnv to merge declarations.


---

© LearnSome.tech · support@iwantto.learnsome.tech
