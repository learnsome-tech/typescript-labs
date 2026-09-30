# m04l02 · The in Operator And Instanceof Narrowing

Module 4: Type Narrowing And Control Flow · lesson 4.2 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m04l02)

**Goal:** You can narrow heterogeneous object shapes using the in operator and distinguish class hierarchies at runtime using instanceof.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l02-03](m04l02-03/) | Error Handler | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a multi-auth token verifier

1. Define an interface JwtToken with sub and exp number properties.
2. Define an interface ApiKey with keyId and permissions array.
3. Write a verifyCredentials function accepting a union of both tokens.
4. Use the in operator to distinguish between JWT and API key tokens.

> **Hint:** Check if 'exp' in token to isolate the JWT token, or 'keyId' in token to isolate the API key.

## Check yourself

- How does the in operator allow narrowing without a discriminant tag?
- Why can instanceof only be used with classes and not with interfaces?
- What makes instanceof the standard choice for error handling in catch blocks?
- What is the limitation of instanceof when objects cross browser iframes or worker realms?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
