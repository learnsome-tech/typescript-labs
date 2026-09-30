interface RouteSpec {
  readonly path: string;
  readonly method: "GET" | "POST";
}
function defineRoutes<const T extends readonly RouteSpec[]>(
  routes: T
): T {
  return routes;
}
const routes = defineRoutes([
  { path: "/health", method: "GET" },
  { path: "/checkout", method: "POST" },
]);
type FirstPath = (typeof routes)[0]["path"];
console.log(`First route path: ${routes[0].path}`);
console.log(`Second route method: ${routes[1].method}`);
