interface HealthStatus {
  healthy: boolean;
  timestamp: number;
}

function check(): HealthStatus {
  return { healthy: true, timestamp: Date.now() };
}

const status = check();
console.log(`Healthy: ${status.healthy}`);
