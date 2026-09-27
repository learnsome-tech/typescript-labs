// Production TypeScript — lesson m05l04 — Default Generic Arguments And Multi-Type Parameters
// https://learnsome.tech/courses/typescript-course/watch?lesson=m05l04
// © LearnSome.tech
interface ApiResponse<Data, Err = Error> {
  status: "success" | "error";
  data?: Data;
  error?: Err;
}
function successResponse<Data, Err = Error>(
  data: Data
): ApiResponse<Data, Err> {
  return { status: "success", data };
}
interface CustomValidationError {
  fields: string[];
}
const defaultResp = successResponse({ userCount: 42 });
const customResp: ApiResponse<null, CustomValidationError> = {
  status: "error",
  error: { fields: ["email", "password"] },
};
console.log(`Default status: ${defaultResp.status}`);
console.log(`Custom error fields: ${customResp.error?.fields.join(", ")}`);
