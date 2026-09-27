# Exercises — Discriminated Unions: Tagged Variants And Pattern Matching

Lesson `m03l04` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m03l04)

## Exercise 1: Model a file upload lifecycle

1. Create an UploadState union with four variants: queued, uploading, finished, and failed.
2. Include a progress percentage number only on the uploading variant.
3. Include a publicUrl string only on the finished variant.
4. Write a formatProgress function that prints formatted status for each state.

> **Hint**: Attempting to access progress on finished will trigger a compiler error because progress only exists on uploading.


---

© LearnSome.tech · support@iwantto.learnsome.tech
