# Exercises — Literal Types: String, Number, Boolean Literals And const

Lesson `m02l02` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m02l02)

## Exercise 1: Create a database connection pool config

1. Declare a union type for supported database engines: postgres, mysql, or sqlite.
2. Declare a connection state union: connecting, connected, or disconnected.
3. Create a pool config object with as const holding host, port, and engine.
4. Write a connect function that only accepts the exact engine literal from your config.

> **Hint**: Use typeof config.engine to extract the literal type from your const-asserted dictionary.


---

© LearnSome.tech · support@iwantto.learnsome.tech
