import type { JSX } from 'react';

export default function PageView({
  title,
  url,
}: {
  title: string;
  url: string;
}): JSX.Element {
  return (
    <div className="bg-white shadow-sm p-5 border border-gray-200 rounded-xl">
      <div className="mb-1 font-semibold text-lg">{title}</div>
      <div className="mb-3 text-sm">
        <span className="font-medium">URL:</span>{' '}
        <code className="bg-gray-50 px-1 py-0.5 border border-gray-200 rounded">
          {url}
        </code>
      </div>
      <p className="text-gray-600">
        This is a mock page. Type a URL and press{' '}
        <kbd className="px-1 border rounded">Enter</kbd> or click <em>Go</em>.
        Back/Forward enable only when applicable. Visiting a new page clears the
        Forward stack—just like a real browser.
      </p>
    </div>
  );
}
