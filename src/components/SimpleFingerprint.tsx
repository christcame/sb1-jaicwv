import React from 'react';
import { Fingerprint, Loader2 } from 'lucide-react';
import { useFingerprint } from '../hooks/useFingerprint';
import { CopyButton } from './CopyButton';

export function SimpleFingerprint() {
  const { fingerprint, isLoading, regenerate } = useFingerprint();

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 w-full max-w-md border border-purple-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
            <Fingerprint className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-purple-900">
            Random Fingerprint
          </h2>
        </div>
        <button
          onClick={regenerate}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-lg 
                   hover:from-purple-600 hover:to-pink-600 transition-all shadow hover:shadow-lg
                   active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          Generate
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
        </div>
      ) : fingerprint ? (
        <div className="space-y-4 animate-fadeIn">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-purple-700">ID</span>
              <CopyButton text={fingerprint.visitorId} />
            </div>
            <p className="font-mono text-sm break-all text-purple-900">
              {fingerprint.visitorId}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}