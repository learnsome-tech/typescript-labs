# Exercises — tsconfig.json: target, lib, strict And NodeNext

Lesson `m01l03` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m01l03)

## Exercise 1: Experiment with noUncheckedIndexedAccess

1. Create a tsconfig with strict enabled and declare a string array.
2. Access index zero and observe the inferred element type.
3. Enable noUncheckedIndexedAccess in your compiler options.
4. Observe how the inferred type shifts from string to string or undefined.

> **Hint**: Arrays in JavaScript can always be out of bounds, so noUncheckedIndexedAccess treats every index lookup as potentially undefined.


---

© LearnSome.tech · support@iwantto.learnsome.tech
