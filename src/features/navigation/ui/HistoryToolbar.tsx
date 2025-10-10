import React from 'react';

type Props = {
  hasBack: boolean;
  hasForward: boolean;
  onBack: () => void;
  onForward: () => void;
  onHome: () => void;
};

const HistoryToolbar: React.FC<Props> = ({
  hasBack,
  hasForward,
  onBack,
  onForward,
  onHome,
}) => (
  <div className="flex items-center gap-1">
    <button
      aria-label="Back"
      onClick={onBack}
      disabled={!hasBack}
      className="flex justify-center items-center bg-white hover:bg-gray-50 disabled:opacity-40 border border-gray-200 rounded-md w-6 h-6 text-gray-700 disabled:cursor-not-allowed"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0 6.75 6.75M4.5 12l6.75-6.75"
        ></path>
      </svg>
    </button>
    <button
      aria-label="Forward"
      onClick={onForward}
      disabled={!hasForward}
      className="flex justify-center items-center bg-white hover:bg-gray-50 disabled:opacity-40 border border-gray-200 rounded-md w-6 h-6 text-gray-700 disabled:cursor-not-allowed"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
        ></path>
      </svg>
    </button>
    <button
      aria-label="Home"
      onClick={onHome}
      className="flex justify-center items-center bg-white hover:bg-gray-50 border border-gray-200 rounded-md w-6 h-6 text-gray-600"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        ></path>
      </svg>
    </button>
  </div>
);

export default HistoryToolbar;
