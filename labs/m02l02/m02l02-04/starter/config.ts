const API_CONFIG = {
  endpoint: "https://api.internal.local",
  retries: 3,
  environment: "production",
  features: ["billing", "webhooks", "audit"]
} as const;

type Environment = typeof API_CONFIG["environment"];
type Retries = typeof API_CONFIG["retries"];

function printEnv(env: Environment, retries: Retries): void {
  console.log(`Target: ${env}, Retries allowed: ${retries}`);
}

printEnv(API_CONFIG.environment, API_CONFIG.retries);
