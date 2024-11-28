export interface VisitorInfo {
  visitorId: string;
  components: Record<string, any>;
}

export function generateRandomComponents() {
  return {
    userAgent: {
      value: generateRandomUserAgent()
    },
    screenResolution: {
      value: [
        Math.floor(Math.random() * 1000) + 1024,
        Math.floor(Math.random() * 500) + 768
      ]
    },
    timezone: {
      value: {
        location: `UTC${Math.random() > 0.5 ? '+' : '-'}${Math.floor(Math.random() * 12)}`
      }
    },
    platform: {
      value: Math.random() > 0.5 ? 'Win32' : 'MacIntel'
    },
    languages: {
      value: ['en-US', 'en']
    },
    colorDepth: {
      value: 24
    },
    deviceMemory: {
      value: [2, 4, 8, 16][Math.floor(Math.random() * 4)]
    },
    hardwareConcurrency: {
      value: [4, 8, 12, 16][Math.floor(Math.random() * 4)]
    }
  };
}

function generateRandomUserAgent(): string {
  const browsers = [
    'Chrome/120.0.0.0',
    'Firefox/123.0',
    'Safari/17.2.1',
    'Edge/121.0.0.0'
  ];
  const platforms = ['Windows NT 10.0', 'Macintosh; Intel Mac OS X 10_15_7', 'X11; Linux x86_64'];
  
  const browser = browsers[Math.floor(Math.random() * browsers.length)];
  const platform = platforms[Math.floor(Math.random() * platforms.length)];
  
  return `Mozilla/5.0 (${platform}) AppleWebKit/537.36 (KHTML, like Gecko) ${browser}`;
}