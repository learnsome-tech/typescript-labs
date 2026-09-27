# Exercises — The Spine Artifact: Generating Typed Models From OpenAPI

Lesson `m07l05` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m07l05)

## Exercise 1: Build a paginated task list client

1. Declare a TaskPage interface holding an array of Task items and next cursor.
2. Author a fetchTasks function returning Promise of TaskPage.
3. Simulate returning a page of two tasks with a next cursor string.
4. Verify that mapped rendering of items preserves task title and state typing.

> **Hint**: Model items as Task[] and next as string or undefined.


---

© LearnSome.tech · support@iwantto.learnsome.tech
