import React from 'react';
import { useFingerprint } from '../hooks/useFingerprint';
import { FingerprintInfo } from './FingerprintInfo';
import { Fingerprint, Loader2, RefreshCw } from 'lucide-react';

export function FingerprintDisplay() {
  const { fingerprint, isLoading, error, regenerate } = useFingerprint();

  if (error) {
    return (
      <div className="text-rose-500 bg-rose-50 p-4 rounded-lg">
        <p>Error loading fingerprint: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-2xl w-full border border-purple-100">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl shadow-lg">
            <Fingerprint className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Random Fingerprint
          </h2>
        </div>
        <button
          onClick={regenerate}
          disabled={isLoading}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          Generate New
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
          <span className="ml-4 text-purple-600 font-medium">Generating fingerprint...</span>
        </div>
      ) : (
        <FingerprintInfo fingerprint={fingerprint} />
      )}
    </div>
  );
}
