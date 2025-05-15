'use client';

import React, { useState } from 'react';

export function CopyButton({
    textToCopy,
    contentName
}: {
    textToCopy: string;
    contentName: string;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <button
            onClick={handleCopy}
            className='text-green-400 hover:text-green-300 ml-2 text-sm font-medium min-w-[110px] text-center'
        >
            {copied ? `Copied!` : `Copy ${contentName}`}
        </button>
    );
}
