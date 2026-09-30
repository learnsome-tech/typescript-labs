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
