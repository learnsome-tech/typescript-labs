// Production TypeScript — lesson m01l05 — Verify Your Environment: Running tsc And Bun TypeScript
// https://learnsome.tech/courses/typescript-course/watch?lesson=m01l05
// © LearnSome.tech
interface SystemInfo {
  platform: string;
  nodeVersion: string;
  isReady: boolean;
}

function getSystemInfo(): SystemInfo {
  return {
    platform: process.platform,
    nodeVersion: process.version,
    isReady: true
  };
}

const info = getSystemInfo();
console.log(`Ready on ${info.platform} (${info.nodeVersion})`);
