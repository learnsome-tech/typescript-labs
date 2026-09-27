// Production TypeScript — lesson m05l01 — Why Generics: Functions, Identities And Type Variables
// https://learnsome.tech/courses/typescript-course/watch?lesson=m05l01
// © LearnSome.tech
interface Envelope<T> {
  data: T;
  receivedAt: string;
}
function wrapInEnvelope<T>(payload: T): Envelope<T> {
  return {
    data: payload,
    receivedAt: "2026-09-24T00:00:00Z",
  };
}
const userEnv = wrapInEnvelope({ id: 101, username: "dev" });
const countEnv = wrapInEnvelope(42);
console.log(`User: ${userEnv.data.username}`);
console.log(`Count: ${countEnv.data.toFixed(0)}`);
