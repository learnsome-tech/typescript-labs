# Exercises — Conditional Types: Ternary Types And Type Inference With infer

Lesson `m06l04` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m06l04)

## Exercise 1: Build a recursive deep unwrapper

1. Declare a conditional type Flatten accepting a type parameter T.
2. If T is an array of infer Item, return Item; otherwise return T.
3. Test with string array to confirm it resolves to string.
4. Test with boolean to confirm it resolves to boolean without errors.

> **Hint**: Check T extends (infer E)[] ? E : T.


---

© LearnSome.tech · support@iwantto.learnsome.tech
