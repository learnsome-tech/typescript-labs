# m05l05 · Const Type Parameters: Retaining Literal Types In Functions

Module 5: Generics And Parameterized Types · lesson 5.5 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m05l05)

**Goal:** You can apply const type parameters to preserve exact literal types and readonly tuple structures without requiring caller-side const assertions.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l05-02](m05l05-02/) | Routes | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a literal event subscription registry

1. Author a function registerEvents parameterized by const T extending readonly string[].
2. Return the passed array directly.
3. Pass an array containing userCreated and userDeleted without as const.
4. Confirm that indexed access on the first element is the literal string userCreated.

> **Hint:** Prefix the generic type parameter with the const modifier.

## Check yourself

- Why was caller-side as const burdensome for library consumers prior to TypeScript five?
- Where is the const keyword placed when declaring a const type parameter?
- Why are structures inferred by const type parameters treated as readonly?
- What architectural role do const type parameters play in route and event definitions?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
