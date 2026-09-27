# Exercises — void, undefined And null: Exact Optional Property Types

Lesson `m02l04` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m02l04)

## Exercise 1: Build a patch payload validator

1. Define an interface ProfileUpdate with optional avatarUrl and phone properties.
2. avatarUrl should accept string or null, while phone accepts string.
3. Write a sanitizePayload function that builds an operational database update query.
4. Verify that omitting a key generates no update instruction.

> **Hint**: Check hasOwnProperty or compare against undefined to confirm whether an optional key was explicitly supplied.


---

© LearnSome.tech · support@iwantto.learnsome.tech
