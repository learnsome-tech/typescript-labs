# Exercises — The in Operator And Instanceof Narrowing

Lesson `m04l02` · [Watch](https://learnsome.tech/courses/typescript-course/watch?lesson=m04l02)

## Exercise 1: Build a multi-auth token verifier

1. Define an interface JwtToken with sub and exp number properties.
2. Define an interface ApiKey with keyId and permissions array.
3. Write a verifyCredentials function accepting a union of both tokens.
4. Use the in operator to distinguish between JWT and API key tokens.

> **Hint**: Check if 'exp' in token to isolate the JWT token, or 'keyId' in token to isolate the API key.


---

© LearnSome.tech · support@iwantto.learnsome.tech
