// Production TypeScript — lesson m03l04 — Discriminated Unions: Tagged Variants And Pattern Matching
// https://learnsome.tech/courses/typescript-course/watch?lesson=m03l04
// © LearnSome.tech
type AsyncResult<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

function renderState(res: AsyncResult<{ name: string }>): string {
  switch (res.status) {
    case "loading":
      return "Loading...";
    case "success":
      return `Loaded: ${res.data.name}`;
    case "error":
      return `Failed: ${res.error}`;
  }
}

const success: AsyncResult<{ name: string }> = {
  status: "success",
  data: { name: "Production Cluster" }
};

console.log(renderState(success));
