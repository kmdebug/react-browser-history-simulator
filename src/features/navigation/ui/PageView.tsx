import type { JSX } from 'react';

export default function PageView({
  title,
  url,
}: {
  title: string;
  url: string;
}): JSX.Element {
  return (
    <div className="my-1 p-4 px-4 rounded-xl h-80">
      <div className="font-semibold text-lg">{title}</div>
      <div className="my-3 text-sm">
        <span className="font-medium">URL:</span>{' '}
        <code className="bg-gray-50 px-1 py-0.5 border border-gray-200 rounded">
          {url}
        </code>
      </div>
      <p className="my-3 text-[15px]">This is a mock page.</p>

      <p className="max-w-xl text-[15px]">
        Type a URL and press{' '}
        <kbd className="inline-flex justify-center items-center bg-gray-200 px-1 py-0.5 border border-transparent rounded-md min-h-6 font-mono text-gray-800 text-xs">
          Enter
        </kbd>
        . Back and Forward enable only when applicable. Visiting a new page
        clears the Forward stack like a real browser.
      </p>
    </div>
  );
}
