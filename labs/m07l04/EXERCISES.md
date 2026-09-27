# Exercises — Modern Decorators: Stage 3 Standards And Class Metadata

Lesson `m07l04` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m07l04)

## Exercise 1: Author a timing decorator with context.name

1. Declare a function timed accepting target and ClassMethodDecoratorContext.
2. Extract the method name using context.name.
3. Log the elapsed execution duration around target.call.
4. Decorate a method on a DataService class and verify output.

> **Hint**: Return a replacement function and invoke target using target.call with this and args.


---

© LearnSome.tech · support@iwantto.learnsome.tech
