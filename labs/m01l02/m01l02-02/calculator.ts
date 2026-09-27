// Production TypeScript — lesson m01l02 — The Compiler Pipeline: tsc, AST And Code Emission
// https://learnsome.tech/courses/typescript-course/watch?lesson=m01l02
// © LearnSome.tech
export function add(a: number, b: number): number {
  return a + b;
}

export const TAX_RATE = 0.2;
console.log(`Sum: ${add(10, 20)}, Tax: ${TAX_RATE}`);
