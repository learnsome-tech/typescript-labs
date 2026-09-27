# Exercises — Union Types, Intersections And Property Conflicts

Lesson `m03l03` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m03l03)

## Exercise 1: Build a soft-deletable entity mixin

1. Create a SoftDeletable type with isDeleted boolean and deletedAt number or null.
2. Intersect SoftDeletable with the DatabaseRecord type from earlier.
3. Write a softDelete function that accepts the entity and marks it deleted.
4. Verify that attempting to mutate a readonly property triggers an error.

> **Hint**: Intersections allow extending data contracts cleanly without inheritance hierarchies.


---

© LearnSome.tech · support@iwantto.learnsome.tech
