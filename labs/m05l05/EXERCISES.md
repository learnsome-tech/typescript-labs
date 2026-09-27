# Exercises — Const Type Parameters: Retaining Literal Types In Functions

Lesson `m05l05` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m05l05)

## Exercise 1: Build a literal event subscription registry

1. Author a function registerEvents parameterized by const T extending readonly string[].
2. Return the passed array directly.
3. Pass an array containing userCreated and userDeleted without as const.
4. Confirm that indexed access on the first element is the literal string userCreated.

> **Hint**: Prefix the generic type parameter with the const modifier.


---

© LearnSome.tech · support@iwantto.learnsome.tech
