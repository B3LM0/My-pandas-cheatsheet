import { useState } from 'react';
import { Copy, Check, Star } from 'lucide-react';
import { Snippet } from '../types';

interface SnippetCardProps {
  snippet: Snippet;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function SnippetCard({
  snippet,
  isFavorite,
  onToggleFavorite,
}: SnippetCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {snippet.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {snippet.description}
            </p>
          </div>
          <button
            onClick={() => onToggleFavorite(snippet.id)}
            className={`p-2 rounded-lg transition-all ${
              isFavorite
                ? 'text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                : 'text-gray-400 hover:text-yellow-500 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            aria-label="Toggle favorite"
          >
            <Star
              className="w-5 h-5"
              fill={isFavorite ? 'currentColor' : 'none'}
            />
          </button>
        </div>

        <div className="relative group">
          <pre className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto border border-gray-200 dark:border-gray-700">
            <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
              {snippet.code}
            </code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 opacity-0 group-hover:opacity-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
