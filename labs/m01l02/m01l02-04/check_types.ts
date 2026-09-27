// Production TypeScript — lesson m01l02 — The Compiler Pipeline: tsc, AST And Code Emission
// https://learnsome.tech/courses/typescript-course/watch?lesson=m01l02
// © LearnSome.tech
interface HealthStatus {
  healthy: boolean;
  timestamp: number;
}

function check(): HealthStatus {
  return { healthy: true, timestamp: Date.now() };
}

const status = check();
console.log(`Healthy: ${status.healthy}`);
