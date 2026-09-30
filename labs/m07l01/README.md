# m07l01 · ECMAScript Modules, CJS Interop And verbatimModuleSyntax

Module 7: Modules, Tooling And The OpenAPI Spine · lesson 7.1 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m07l01)

**Goal:** You can configure ECMAScript modules, apply type-only imports, and enforce verbatimModuleSyntax for predictable code emission.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l01-02](m07l01-02/) | Server | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Separate type and value imports cleanly

1. Given a module exporting a class ApiClient and an interface ClientOptions.
2. Author an import statement importing ApiClient as a runtime value.
3. Author a type-only import for ClientOptions using import type.
4. Demonstrate inline type importing using import with curly braces type.

> **Hint:** Use import type for whole imports, or type inside braces for inline specifiers.

## Check yourself

- Why does importing a type with standard import syntax cause issues in single-file transpilers?
- What behavior does the verbatimModuleSyntax compiler option enforce?
- How does inline type importing syntax differ from whole-statement type imports?
- What happens at runtime if an erased type is emitted as a JavaScript value import?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
