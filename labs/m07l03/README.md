# m07l03 · The satisfies Operator: Safe Validation Without Widening

Module 7: Modules, Tooling And The OpenAPI Spine · lesson 7.3 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m07l03)

**Goal:** You can apply the satisfies operator to validate complex configuration objects against contracts without widening property types.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l03-02](m07l03-02/) | Theme Tokens | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Validate a routing table using satisfies

1. Declare a RouteConfig interface with path as string and authRequired as boolean.
2. Declare a RoutesDictionary type as a Record of string and RouteConfig.
3. Create an appRoutes object containing home and checkout using satisfies.
4. Verify that appRoutes.home.path retains its exact literal path string.

> **Hint:** Append satisfies RoutesDictionary to the object literal.

## Check yourself

- Why does a standard type annotation cause theme.primary.toUpperCase() to fail if the type is string or tuple?
- How does the compiler treat misspelled keys when using satisfies versus omitting annotations?
- Can the satisfies operator be combined with as const on the same object?
- What architectural role does satisfies play in frontend design systems and theme tokens?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
