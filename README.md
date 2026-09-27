<img src="https://learnsome.tech/logo.png" width="48" alt="LearnSome.tech">

# Production TypeScript

7 modules, 35 lessons: The Compiler And Mental Model; Primitives, Literals And Top/Bottom Types; Object Shapes, Interfaces And Types; Type Narrowing And Control Flow; Generics And Parameterized Types; Advanced Type Programming And Utilities; Modules, Tooling And The OpenAPI Spine.

## Watch and read

- **Course page**: [https://learnsome.tech/courses/typescript-course](https://learnsome.tech/courses/typescript-course)
- **Video player**: [https://learnsome.tech/courses/typescript-course/watch](https://learnsome.tech/courses/typescript-course/watch)
- **Handbook PDF**: [https://learnsome.tech/handbooks/typescript/book.pdf](https://learnsome.tech/handbooks/typescript/book.pdf)
- **On-site handbook**: [https://learnsome.tech/courses/typescript-course/book](https://learnsome.tech/courses/typescript-course/book)

## What is in this repository

This repository contains code artifacts, exercises and reference files for the lessons in this course.
35 lessons include a `labs/<lessonId>/` folder.
Each folder is named after the lesson identifier (e.g. `labs/m01l01/`) and contains the
artifact files shown in the course video, an `EXERCISES.md` with hands-on tasks, and
sub-directories named by artifact reference (e.g. `m01l01-02/`).

## Lessons

| # | Lesson | Watch | Labs | Handbook |
|---|--------|-------|------|----------|
| | **The Compiler And Mental Model** | | | |
| 1 | Why TypeScript: Contracts, Erased Types And Soundness | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m01l01) | [labs/m01l01/](labs/m01l01/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-1-1) |
| 2 | The Compiler Pipeline: tsc, AST And Code Emission | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m01l02) | [labs/m01l02/](labs/m01l02/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-1-2) |
| 3 | tsconfig.json: target, lib, strict And NodeNext | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m01l03) | [labs/m01l03/](labs/m01l03/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-1-3) |
| 4 | Type Annotations, Type Inference And Contextual Typing | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m01l04) | [labs/m01l04/](labs/m01l04/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-1-4) |
| 5 | Verify Your Environment: Running tsc And Bun TypeScript | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m01l05) | [labs/m01l05/](labs/m01l05/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-1-5) |
| | **Primitives, Literals And Top/Bottom Types** | | | |
| 6 | Primitive Types: String, Number, Boolean, Bigint And Symbol | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m02l01) | [labs/m02l01/](labs/m02l01/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-2-1) |
| 7 | Literal Types: String, Number, Boolean Literals And const | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m02l02) | [labs/m02l02/](labs/m02l02/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-2-2) |
| 8 | any Versus unknown: Defensive Typing In Practice | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m02l03) | [labs/m02l03/](labs/m02l03/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-2-3) |
| 9 | void, undefined And null: Exact Optional Property Types | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m02l04) | [labs/m02l04/](labs/m02l04/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-2-4) |
| 10 | never: The Bottom Type And Exhaustive Switch Checking | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m02l05) | [labs/m02l05/](labs/m02l05/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-2-5) |
| | **Object Shapes, Interfaces And Types** | | | |
| 11 | Type Aliases Versus Interfaces: Declaration Merging | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m03l01) | [labs/m03l01/](labs/m03l01/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-3-1) |
| 12 | Optional Properties, Readonly And Index Signatures | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m03l02) | [labs/m03l02/](labs/m03l02/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-3-2) |
| 13 | Union Types, Intersections And Property Conflicts | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m03l03) | [labs/m03l03/](labs/m03l03/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-3-3) |
| 14 | Discriminated Unions: Tagged Variants And Pattern Matching | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m03l04) | [labs/m03l04/](labs/m03l04/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-3-4) |
| 15 | Tuples: Fixed Length, Labeled Elements And Variadic Tuples | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m03l05) | [labs/m03l05/](labs/m03l05/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-3-5) |
| | **Type Narrowing And Control Flow** | | | |
| 16 | Typeof Guards, Truthiness And Equality Narrowing | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m04l01) | [labs/m04l01/](labs/m04l01/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-4-1) |
| 17 | The in Operator And Instanceof Narrowing | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m04l02) | [labs/m04l02/](labs/m04l02/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-4-2) |
| 18 | Custom Type Predicates: Functions Returning is Type | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m04l03) | [labs/m04l03/](labs/m04l03/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-4-3) |
| 19 | Assertion Signatures: asserts condition And Invariants | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m04l04) | [labs/m04l04/](labs/m04l04/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-4-4) |
| 20 | Exhaustive Narrowing With never In Production Handlers | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m04l05) | [labs/m04l05/](labs/m04l05/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-4-5) |
| | **Generics And Parameterized Types** | | | |
| 21 | Why Generics: Functions, Identities And Type Variables | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m05l01) | [labs/m05l01/](labs/m05l01/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-5-1) |
| 22 | Generic Interfaces, Classes And Type Aliases | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m05l02) | [labs/m05l02/](labs/m05l02/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-5-2) |
| 23 | Generic Constraints: extends, keyof And Indexed Access | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m05l03) | [labs/m05l03/](labs/m05l03/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-5-3) |
| 24 | Default Generic Arguments And Multi-Type Parameters | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m05l04) | [labs/m05l04/](labs/m05l04/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-5-4) |
| 25 | Const Type Parameters: Retaining Literal Types In Functions | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m05l05) | [labs/m05l05/](labs/m05l05/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-5-5) |
| | **Advanced Type Programming And Utilities** | | | |
| 26 | Core Utilities: Partial, Required, Readonly, Pick And Omit | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m06l01) | [labs/m06l01/](labs/m06l01/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-6-1) |
| 27 | Union Utilities: Exclude, Extract, NonNullable And Awaited | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m06l02) | [labs/m06l02/](labs/m06l02/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-6-2) |
| 28 | Function Utilities: ReturnType, Parameters And Constructor | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m06l03) | [labs/m06l03/](labs/m06l03/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-6-3) |
| 29 | Conditional Types: Ternary Types And Type Inference With infer | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m06l04) | [labs/m06l04/](labs/m06l04/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-6-4) |
| 30 | Mapped Types, Key Remapping With as And Template Literals | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m06l05) | [labs/m06l05/](labs/m06l05/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-6-5) |
| | **Modules, Tooling And The OpenAPI Spine** | | | |
| 31 | ECMAScript Modules, CJS Interop And verbatimModuleSyntax | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m07l01) | [labs/m07l01/](labs/m07l01/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-7-1) |
| 32 | Declaration Files, Ambient Namespaces And Module Augmentation | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m07l02) | [labs/m07l02/](labs/m07l02/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-7-2) |
| 33 | The satisfies Operator: Safe Validation Without Widening | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m07l03) | [labs/m07l03/](labs/m07l03/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-7-3) |
| 34 | Modern Decorators: Stage 3 Standards And Class Metadata | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m07l04) | [labs/m07l04/](labs/m07l04/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-7-4) |
| 35 | The Spine Artifact: Generating Typed Models From OpenAPI | [▶](https://learnsome.tech/courses/typescript-course/watch?lesson=m07l05) | [labs/m07l05/](labs/m07l05/) | [§](https://learnsome.tech/courses/typescript-course/book#lesson-7-5) |

## Exercises

Each lesson folder contains an `EXERCISES.md` with hands-on tasks drawn directly from the course material.
Open the file for a lesson to see the tasks and, where provided, hints.

---

© LearnSome.tech · support@iwantto.learnsome.tech
