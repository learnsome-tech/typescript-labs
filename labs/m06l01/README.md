# m06l01 · Core Utilities: Partial, Required, Readonly, Pick And Omit

Module 6: Advanced Type Programming And Utilities · lesson 6.1 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m06l01)

**Goal:** You can transform domain models into specialized creation, patch, and read DTOs using Partial, Required, Readonly, Pick, and Omit.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l01-02](m06l01-02/) | User Dtos | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Derive product catalog mutation payloads

1. Declare a ProductEntity with id, sku, title, priceInCents, and updatedAt.
2. Derive CreateProductDto by omitting id and updatedAt.
3. Derive PatchProductDto by making CreateProductDto fields optional.
4. Verify that PatchProductDto permits updating price without providing title.

> **Hint:** Use Omit to remove system fields, then wrap the result in Partial for patches.

## Check yourself

- Why is deriving DTOs with Pick and Omit superior to declaring separate interfaces?
- How does the behavior of Required differ from the behavior of Partial?
- What error occurs if you pass an invalid property name to the key parameter of Pick?
- Why does Readonly provide shallow rather than deep immutability by default?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
