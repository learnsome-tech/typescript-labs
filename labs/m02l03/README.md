# m02l03 · any Versus unknown: Defensive Typing In Practice

Module 2: Primitives, Literals And Top/Bottom Types · lesson 2.3 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m02l03)

**Goal:** You can distinguish between any and unknown, eliminate any-leakage from your applications, and safely parse untrusted external data using unknown with runtime type narrowing.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l03-03](m02l03-03/) | Webhook | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a safe local storage reader

1. Write a readStorage function that parses a raw JSON string into unknown.
2. Define an interface UserPreferences with theme and notifications flags.
3. Implement a defensive validation check asserting all required keys and types.
4. Return the validated preferences or a sensible default fallback object.

> **Hint:** JSON.parse returns any by default; immediately re-cast the result to unknown to enforce defensive validation.

## Check yourself

- Why is any considered contagious across a TypeScript codebase?
- How does unknown differ from any in terms of property access?
- Why should the result of JSON.parse be cast to unknown rather than left as any?
- How do type guards allow you to safely extract values from an unknown variable?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
