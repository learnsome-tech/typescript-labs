# m07l04 · Modern Decorators: Stage 3 Standards And Class Metadata

Module 7: Modules, Tooling And The OpenAPI Spine · lesson 7.4 · Pro · [Open the lesson](https://learnsome.tech/learn/typescript-course/m07l04)

**Goal:** You can write standard Stage 3 method and class decorators using ClassMethodDecoratorContext to intercept execution and manage metadata.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l04-02](m07l04-02/) | Payment | Read along |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Author a timing decorator with context.name

1. Declare a function timed accepting target and ClassMethodDecoratorContext.
2. Extract the method name using context.name.
3. Log the elapsed execution duration around target.call.
4. Decorate a method on a DataService class and verify output.

> **Hint:** Return a replacement function and invoke target using target.call with this and args.

## Check yourself

- What is the key difference between legacy experimental decorators and Stage Three decorators?
- What information does the ClassMethodDecoratorContext parameter provide to a method decorator?
- How does context.addInitializer enable decorators to register instance lifecycle hooks?
- Why does modern decorator metadata eliminate the need for third-party reflection libraries?

---

[Course README](../../README.md) · [Production TypeScript on LearnSome.tech](https://learnsome.tech/courses/typescript-course)
