import { API_CONFIG } from '../config/api';
import { VisitorInfo } from '../utils/fingerprint';
import { fetchWithTimeout } from '../utils/api';
import { generateRandomComponents } from '../utils/fingerprint';

export async function getRandomFingerprint(): Promise<VisitorInfo> {
  try {
    const response = await fetchWithTimeout(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.FINGERPRINT}`,
      {
        headers: {
          'Accept': 'text/plain',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch fingerprint');
    }

    const visitorId = await response.text();
    
    return {
      visitorId,
      components: generateRandomComponents()
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API Error: ${error.message}`);
    }
    throw new Error('An unexpected error occurred');
  }
}