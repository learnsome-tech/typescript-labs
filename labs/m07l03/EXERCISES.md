# Exercises — The satisfies Operator: Safe Validation Without Widening

Lesson `m07l03` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m07l03)

## Exercise 1: Validate a routing table using satisfies

1. Declare a RouteConfig interface with path as string and authRequired as boolean.
2. Declare a RoutesDictionary type as a Record of string and RouteConfig.
3. Create an appRoutes object containing home and checkout using satisfies.
4. Verify that appRoutes.home.path retains its exact literal path string.

> **Hint**: Append satisfies RoutesDictionary to the object literal.


---

© LearnSome.tech · support@iwantto.learnsome.tech
