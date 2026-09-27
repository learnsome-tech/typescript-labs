# Exercises — Why TypeScript: Contracts, Erased Types And Soundness

Lesson `m01l01` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m01l01)

## Exercise 1: Create an article interface

1. Define an interface named Article with title, slug, and wordCount properties.
2. Write a summary function that accepts an Article and returns a formatted string.
3. Call the function with an object literal that includes an extra unpublished property.
4. Observe how TypeScript handles excess properties in object literals.

> **Hint**: Assigning an object literal directly to a type triggers excess property checking, while assigning via an intermediate variable uses standard structural compatibility.


---

© LearnSome.tech · support@iwantto.learnsome.tech
