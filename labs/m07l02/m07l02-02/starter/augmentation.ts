interface AuthUser { id: string; role: "admin" | "member" }
namespace Framework {
  export interface Request {
    path: string;
    method: string;
  }
}
namespace Framework {
  export interface Request {
    user?: AuthUser;
  }
}
function handleRequest(req: Framework.Request): string {
  const role = req.user?.role ?? "anonymous";
  return `Accessing ${req.path} as ${role}`;
}
const req: Framework.Request = {
  path: "/metrics",
  method: "GET",
  user: { id: "u-99", role: "admin" },
};
console.log(handleRequest(req));
