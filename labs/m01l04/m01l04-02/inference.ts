// Production TypeScript — lesson m01l04 — Type Annotations, Type Inference And Contextual Typing
// https://learnsome.tech/courses/typescript-course/watch?lesson=m01l04
// © LearnSome.tech
let mutableName = "Avery"; // inferred as string
const immutableName = "Jordan"; // inferred as "Jordan"

function formatGreeting(name: string): string {
  return `Hello, ${name}!`;
}

console.log(formatGreeting(mutableName));
console.log(formatGreeting(immutableName));
