# m03l03 · Union Types, Intersections And Property Conflicts

Module 3: Object Shapes, Interfaces And Types · lesson 3.3 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m03l03)

**Goal:** You can compose complex data models using union and intersection types, avoid property conflicts that collapse to never, and access common properties safely.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l03-02](m03l03-02/) | Entity | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a soft-deletable entity mixin

1. Create a SoftDeletable type with isDeleted boolean and deletedAt number or null.
2. Intersect SoftDeletable with the DatabaseRecord type from earlier.
3. Write a softDelete function that accepts the entity and marks it deleted.
4. Verify that attempting to mutate a readonly property triggers an error.

> **Hint:** Intersections allow extending data contracts cleanly without inheritance hierarchies.

## Check yourself

- Why can you only access common properties on an un-narrowed union of objects?
- How do intersection types allow composition without class inheritance?
- What happens when two intersected types have a property with the same name but different primitive types?
- How can you fix an accidental collapse to never in an intersected type?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
