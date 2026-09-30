# m02l01 · Primitive Types: String, Number, Boolean, Bigint And Symbol

Module 2: Primitives, Literals And Top/Bottom Types · lesson 2.1 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m02l01)

**Goal:** You can declare and manipulate primitive types in TypeScript and avoid the wrapper object anti-pattern.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l01-02](m02l01-02/) | Primitives | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a financial ledger entry

1. Create an interface named LedgerEntry with an id, balance, and audited flag.
2. Use a bigint for currency balance in atomic cents to avoid floating point drift.
3. Use a symbol for an internal transaction hash.
4. Instantiate a valid entry and log its computed values.

> **Hint:** Floating point numbers are unsafe for financial math; integer atomic units with bigint preserve precision.

## Check yourself

- Why must you always use lowercase string instead of capitalized String?
- What problem does bigint solve that regular numbers cannot handle?
- Why cannot you add a number directly to a bigint in TypeScript?
- What makes symbols unique when used as object keys?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
