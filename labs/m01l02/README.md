# m01l02 · The Compiler Pipeline: tsc, AST And Code Emission

Module 1: The Compiler And Mental Model · lesson 1.2 · Free · [Open the lesson](https://learnsome.tech/learn/typescript-course/m01l02)

**Goal:** You can describe the four phases of the TypeScript compiler pipeline from source text to AST to type checking and emission, and configure noEmitOnError.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l02-02](m01l02-02/) | Calculator | Graded |
| [m01l02-04](m01l02-04/) | Calculator | Runs, not graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Inspect emit with different targets

1. Create a small TypeScript file utilizing optional chaining and nullish coalescing.
2. Compile it targeting E S five using tsc and observe the polyfill helpers.
3. Compile the same file targeting E S twenty twenty-two and compare the emitted output.
4. Add a type error and observe whether an output file is still generated.

> **Hint:** Modern targets preserve native language syntax without generating bulky helper functions.

## Check yourself

- What are the four core phases of the TypeScript compiler pipeline?
- Why does tsc emit JavaScript files even when type errors exist by default?
- What is the purpose of running tsc with the noEmit flag in automated pipelines?
- How does changing the compiler target affect the output of modern syntax features?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
