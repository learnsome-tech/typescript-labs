// Production TypeScript — lesson m06l02 — Union Utilities: Exclude, Extract, NonNullable And Awaited
// https://learnsome.tech/courses/typescript-course/watch?lesson=m06l02
// © LearnSome.tech
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type ReadOnlyMethod = Extract<HttpMethod, "GET">;
type MutationMethod = Exclude<HttpMethod, "GET">;
type NullableConfig = string | number | null | undefined;
type CleanConfig = NonNullable<NullableConfig>;
async function fetchAccount() {
  return { id: "acc-9", tier: "enterprise" };
}
type AccountPayload = Awaited<ReturnType<typeof fetchAccount>>;
function logMutation(method: MutationMethod): string {
  return `Mutation allowed via ${method}`;
}
const currentMethod: MutationMethod = "POST";
console.log(logMutation(currentMethod));
const res: AccountPayload = { id: "acc-9", tier: "enterprise" };
console.log(`Resolved: ${res.tier}`);
