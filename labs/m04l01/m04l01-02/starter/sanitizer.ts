type QueryParam = string | string[] | number | null | undefined;

function normalizeParam(param: QueryParam): string {
  // 1. Truthiness narrowing eliminates null and undefined
  if (!param) {
    return "default";
  }
  // 2. Typeof guard narrows to number
  if (typeof param === "number") {
    return param.toFixed(0);
  }
  // 3. Array check vs string
  if (Array.isArray(param)) {
    return param.join(",");
  }
  // 4. Here param is proven to be string
  return param.trim();
}

console.log(normalizeParam(42.8));
console.log(normalizeParam(["web", "api"]));
console.log(normalizeParam("   hello   "));
