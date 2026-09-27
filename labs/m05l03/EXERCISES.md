# Exercises — Generic Constraints: extends, keyof And Indexed Access

Lesson `m05l03` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m05l03)

## Exercise 1: Implement a typed array pluck function

1. Create a function named pluckValues accepting an array of objects and a key.
2. Constrain key parameter K to extends keyof T.
3. Return an array of values typed as an array of T bracket K.
4. Verify that plucking id from a list of accounts yields an array of strings.

> **Hint**: Map over the array and invoke indexed access for each item using the provided key.


---

© LearnSome.tech · support@iwantto.learnsome.tech
