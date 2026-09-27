// Production TypeScript — lesson m07l05 — The Spine Artifact: Generating Typed Models From OpenAPI
// https://learnsome.tech/courses/typescript-course/watch?lesson=m07l05
// © LearnSome.tech
export type TaskState = "open" | "done";
export interface Task {
  id: number;
  title: string;
  state: TaskState;
}
export interface ProblemDetails {
  title: string;
  status: number;
}
export type TaskResult =
  | { ok: true; task: Task }
  | { ok: false; error: ProblemDetails };
function parseResponse(code: number, data: any): TaskResult {
  return code === 200
    ? { ok: true, task: data }
    : { ok: false, error: data };
}
const res = parseResponse(200, { id: 101, title: "Deploy", state: "open" });
if (res.ok) {
  console.log(`Task ${res.task.id}: ${res.task.title} [${res.task.state}]`);
}
