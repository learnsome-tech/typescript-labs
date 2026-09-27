# Exercises — Custom Type Predicates: Functions Returning is Type

Lesson `m04l03` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m04l03)

## Exercise 1: Write a pagination response guard

1. Define an interface PaginatedResponse with items array and total number.
2. Write an isPaginatedResponse type predicate accepting unknown.
3. Verify that raw is a non-null object with valid items and total fields.
4. Use the predicate to parse unknown API payloads without type assertions.

> **Hint**: Check typeof raw === 'object' && raw !== null before inspecting nested properties.


---

© LearnSome.tech · support@iwantto.learnsome.tech
