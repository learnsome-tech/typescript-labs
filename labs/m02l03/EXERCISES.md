# Exercises — any Versus unknown: Defensive Typing In Practice

Lesson `m02l03` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m02l03)

## Exercise 1: Build a safe local storage reader

1. Write a readStorage function that parses a raw JSON string into unknown.
2. Define an interface UserPreferences with theme and notifications flags.
3. Implement a defensive validation check asserting all required keys and types.
4. Return the validated preferences or a sensible default fallback object.

> **Hint**: JSON.parse returns any by default; immediately re-cast the result to unknown to enforce defensive validation.


---

© LearnSome.tech · support@iwantto.learnsome.tech
