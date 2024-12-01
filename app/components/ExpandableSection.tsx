'use client';

import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ExpandableSection({ title, children }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 py-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between text-left text-black dark:text-white"
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <ChevronUpIcon
          className={`h-4 w-4 transform transition-transform ${
            isExpanded ? 'rotate-0' : 'rotate-180'
          }`}
        />
      </button>
      {isExpanded && <div className="mt-2">{children}</div>}
    </div>
  );
}