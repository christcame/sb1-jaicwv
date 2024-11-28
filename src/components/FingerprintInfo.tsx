import React from 'react';
import { VisitorInfo } from '../utils/fingerprint';
import { CopyButton } from './CopyButton';

interface FingerprintInfoProps {
  fingerprint: VisitorInfo;
}

export function FingerprintInfo({ fingerprint }: FingerprintInfoProps) {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
        <div className="flex justify-between mb-2">
          <h3 className="text-sm font-medium text-purple-700">Visitor ID</h3>
          <CopyButton text={fingerprint.visitorId} />
        </div>
        <p className="font-mono text-sm break-all text-purple-900">
          {fingerprint.visitorId}
        </p>
      </div>

      <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-6 rounded-xl border border-rose-100">
        <h3 className="text-sm font-medium text-rose-700 mb-4">Components</h3>
        <div className="space-y-3">
          {Object.entries(fingerprint.components).map(([key, component]) => (
            <div key={key} className="text-sm bg-white/50 p-4 rounded-lg">
              <div className="flex justify-between">
                <span className="font-medium text-rose-700">{key}</span>
                <CopyButton text={JSON.stringify(component.value)} />
              </div>
              <span className="text-rose-600 mt-1 block">
                {JSON.stringify(component.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}