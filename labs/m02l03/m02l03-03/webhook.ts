// Production TypeScript — lesson m02l03 — any Versus unknown: Defensive Typing In Practice
// https://learnsome.tech/courses/typescript-course/watch?lesson=m02l03
// © LearnSome.tech
interface WebhookEvent {
  id: string;
  event: string;
}

function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === "object" && val !== null;
}

function parseWebhook(raw: unknown): WebhookEvent {
  if (!isObject(raw) || typeof raw.id !== "string") {
    throw new Error("Missing id");
  }
  if (typeof raw.event !== "string") {
    throw new Error("Missing event");
  }
  return { id: raw.id, event: raw.event };
}

const payload: unknown = { id: "evt_404", event: "deployment.created" };
const validated = parseWebhook(payload);
console.log(`Validated event ${validated.event} with ID ${validated.id}`);
