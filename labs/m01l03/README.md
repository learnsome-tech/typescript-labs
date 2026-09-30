# m01l03 · tsconfig.json: target, lib, strict And NodeNext

Module 1: The Compiler And Mental Model · lesson 1.3 · Free · [Open the lesson](https://learnsome.tech/learn/typescript-course/m01l03)

**Goal:** You can author a production tsconfig.json configured with strict mode, modern module resolution, and correct library declarations.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l03-03](m01l03-03/) | Strict Demo | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Experiment with noUncheckedIndexedAccess

1. Create a tsconfig with strict enabled and declare a string array.
2. Access index zero and observe the inferred element type.
3. Enable noUncheckedIndexedAccess in your compiler options.
4. Observe how the inferred type shifts from string to string or undefined.

> **Hint:** Arrays in JavaScript can always be out of bounds, so noUncheckedIndexedAccess treats every index lookup as potentially undefined.

## Check yourself

- What core type safety check does strictNullChecks introduce?
- Why should modern TypeScript projects use moduleResolution NodeNext instead of node?
- What behavior does the noUncheckedIndexedAccess compiler flag enforce on arrays?
- How does the skipLibCheck flag improve compile times in large codebases?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
