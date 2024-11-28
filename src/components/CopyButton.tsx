import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 text-purple-600 hover:text-purple-700 transition-colors rounded-full hover:bg-purple-50"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 animate-bounce" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}