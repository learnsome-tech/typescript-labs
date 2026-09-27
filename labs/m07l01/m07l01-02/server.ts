// Production TypeScript — lesson m07l01 — ECMAScript Modules, CJS Interop And verbatimModuleSyntax
// https://learnsome.tech/courses/typescript-course/watch?lesson=m07l01
// © LearnSome.tech
export type HttpPort = number;
export interface ServerConfig {
  port: HttpPort;
  host: string;
}
export class HttpServer {
  constructor(public config: ServerConfig) {}
  listen(): string {
    return `Server listening at http://${this.config.host}:${this.config.port}`;
  }
}
const config: ServerConfig = { port: 8080, host: "localhost" };
const server = new HttpServer(config);
console.log(server.listen());
