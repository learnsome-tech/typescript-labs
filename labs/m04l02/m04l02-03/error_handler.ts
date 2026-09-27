// Production TypeScript — lesson m04l02 — The in Operator And Instanceof Narrowing
// https://learnsome.tech/courses/typescript-course/watch?lesson=m04l02
// © LearnSome.tech
class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "HttpError";
  }
}

function handleError(err: unknown): string {
  if (err instanceof HttpError) {
    return `HTTP ${err.status}: ${err.message}`;
  }
  if (err instanceof Error) {
    return `System error: ${err.message}`;
  }
  if (typeof err === "object" && err !== null && "msg" in err) {
    return `Legacy error: ${(err as { msg: string }).msg}`;
  }
  return "Unknown internal failure";
}

console.log(handleError(new HttpError(404, "Resource missing")));
console.log(handleError(new Error("Database timeout")));
