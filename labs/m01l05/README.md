# m01l05 · Verify Your Environment: Running tsc And Bun TypeScript

Module 1: The Compiler And Mental Model · lesson 1.5 · Free · [Open the lesson](https://learnsome.tech/learn/typescript-course/m01l05)

**Goal:** You can verify your TypeScript compiler installation, run TypeScript files directly with Bun or Node, and validate your development environment.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l05-03](m01l05-03/) | Verify Env | Runs, not graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Run a dual build and execute pass

1. Create a small TypeScript file that imports the node path module.
2. Execute the file directly using bun run and inspect the output.
3. Compile the file with bunx tsc and inspect the emitted JavaScript.
4. Compare the execution speed and artifacts left on disk.

> **Hint:** Direct execution leaves no trace on disk, while tsc produces corresponding JavaScript files.

## Check yourself

- What is the difference between running a file with Bun and compiling it with tsc?
- Why do production CI pipelines run tsc --noEmit if bundlers already compile TypeScript?
- How does the TypeScript language server assist developers during day to day editing?
- What core concepts were covered in Module 01?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
