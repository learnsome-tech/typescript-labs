# Exercises — Core Utilities: Partial, Required, Readonly, Pick And Omit

Lesson `m06l01` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m06l01)

## Exercise 1: Derive product catalog mutation payloads

1. Declare a ProductEntity with id, sku, title, priceInCents, and updatedAt.
2. Derive CreateProductDto by omitting id and updatedAt.
3. Derive PatchProductDto by making CreateProductDto fields optional.
4. Verify that PatchProductDto permits updating price without providing title.

> **Hint**: Use Omit to remove system fields, then wrap the result in Partial for patches.


---

© LearnSome.tech · support@iwantto.learnsome.tech
