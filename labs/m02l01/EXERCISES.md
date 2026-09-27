# Exercises — Primitive Types: String, Number, Boolean, Bigint And Symbol

Lesson `m02l01` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m02l01)

## Exercise 1: Build a financial ledger entry

1. Create an interface named LedgerEntry with an id, balance, and audited flag.
2. Use a bigint for currency balance in atomic cents to avoid floating point drift.
3. Use a symbol for an internal transaction hash.
4. Instantiate a valid entry and log its computed values.

> **Hint**: Floating point numbers are unsafe for financial math; integer atomic units with bigint preserve precision.


---

© LearnSome.tech · support@iwantto.learnsome.tech
