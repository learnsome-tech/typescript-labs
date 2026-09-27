// Production TypeScript — lesson m03l02 — Optional Properties, Readonly And Index Signatures
// https://learnsome.tech/courses/typescript-course/watch?lesson=m03l02
// © LearnSome.tech
interface AuditRecord {
  readonly id: string;
  readonly timestamp: number;
  action: string;
  metadata: { [key: string]: string };
}

function logAudit(entry: AuditRecord): void {
  console.log(`[${entry.id}] Action: ${entry.action}`);
  const ip = entry.metadata["client_ip"] ?? "unknown";
  console.log(`IP: ${ip}`);
}

const record: AuditRecord = {
  id: "aud_501",
  timestamp: Date.now(),
  action: "cluster.deploy",
  metadata: { client_ip: "10.0.1.25", region: "eu-west-2" }
};

logAudit(record);
