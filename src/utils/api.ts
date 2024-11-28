import { API_CONFIG } from '../config/api';
import { ApiError } from '../types/api';

interface FetchOptions extends RequestInit {
  timeout?: number;
}

export async function fetchWithTimeout(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { timeout = API_CONFIG.TIMEOUT, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      throw error;
    }
    throw new Error('Network error');
  }
}