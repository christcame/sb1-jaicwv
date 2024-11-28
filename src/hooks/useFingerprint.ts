import { useState, useCallback, useEffect } from 'react';
import { VisitorInfo } from '../utils/fingerprint';
import { getRandomFingerprint } from '../api/fingerprint';

export function useFingerprint() {
  const [fingerprint, setFingerprint] = useState<VisitorInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const generateFingerprint = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getRandomFingerprint();
      setFingerprint(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to generate fingerprint'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Generate initial fingerprint
  useEffect(() => {
    generateFingerprint();
  }, [generateFingerprint]);

  return {
    fingerprint,
    isLoading,
    error,
    regenerate: generateFingerprint
  };
}