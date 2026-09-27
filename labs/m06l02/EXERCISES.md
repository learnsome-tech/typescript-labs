# Exercises — Union Utilities: Exclude, Extract, NonNullable And Awaited

Lesson `m06l02` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m06l02)

## Exercise 1: Partition user roles and sanitize query inputs

1. Declare a union Role: admin, manager, member, and guest.
2. Derive StaffRole by excluding guest using Exclude.
3. Declare a QueryParam type containing string, string array, null, or undefined.
4. Use NonNullable to create SafeParam, verifying nullish values are removed.

> **Hint**: Use Exclude with the union type and guest literal, and NonNullable on QueryParam.


---

© LearnSome.tech · support@iwantto.learnsome.tech
