'use client'

import React from 'react'

export function CopyButton({ textToCopy, contentName }: { textToCopy: string, contentName: string }) {
  return (
    <button 
      onClick={() => navigator.clipboard.writeText(textToCopy)}
      className="text-green-400 hover:text-green-300 ml-2 text-sm font-medium min-w-[110px] text-center"
    >
      Copy {contentName}
    </button>
  );
}
