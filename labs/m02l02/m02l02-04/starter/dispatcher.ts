type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type StatusCode = 200 | 201 | 400 | 401 | 404 | 500;

interface ApiResponse {
  status: StatusCode;
  method: HttpMethod;
  url: string;
}

function formatLog(res: ApiResponse): string {
  return `[${res.method}] ${res.url} -> ${res.status}`;
}

const successLog: ApiResponse = {
  status: 200,
  method: "POST",
  url: "/api/v1/deployments"
};

console.log(formatLog(successLog));
