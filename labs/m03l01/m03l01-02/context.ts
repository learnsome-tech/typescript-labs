// Production TypeScript — lesson m03l01 — Type Aliases Versus Interfaces: Declaration Merging
// https://learnsome.tech/courses/typescript-course/watch?lesson=m03l01
// © LearnSome.tech
interface RequestContext {
  requestId: string;
}

interface RequestContext {
  user?: { id: string; role: string };
}

function logContext(ctx: RequestContext): void {
  const role = ctx.user ? ctx.user.role : "anonymous";
  console.log(`[${ctx.requestId}] User: ${role}`);
}

const req: RequestContext = {
  requestId: "req_901",
  user: { id: "usr_1", role: "admin" }
};

logContext(req);
