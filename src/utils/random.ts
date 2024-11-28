export function generateRandomString(length: number): string {
  const chars = 'abcdef0123456789';
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}

export function generateRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function generateRandomUserAgent(): string {
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