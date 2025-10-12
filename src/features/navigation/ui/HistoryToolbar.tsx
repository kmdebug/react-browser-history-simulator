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
  <div className="flex items-center gap-1 h-full">
    <button
      aria-label="Click to go back"
      onClick={onBack}
      disabled={!hasBack}
      className="flex justify-center items-center hover:bg-[#EFEBED] disabled:opacity-40 rounded-full w-8 h-8 text-[#43474E] transition-colors disabled:cursor-not-allowed"
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
      aria-label="Click to go forward"
      onClick={onForward}
      disabled={!hasForward}
      className="flex justify-center items-center hover:bg-[#EFEBED] disabled:opacity-40 rounded-full w-8 h-8 text-[#43474E] transition-colors disabled:cursor-not-allowed"
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
      aria-label="Open the homepage"
      onClick={onHome}
      className="flex justify-center items-center hover:bg-[#EFEBED] rounded-full w-8 h-8 text-[#43474E] transition-colors"
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
