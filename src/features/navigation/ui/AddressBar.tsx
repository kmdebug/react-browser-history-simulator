import React from 'react';

type Props = {
  value: string;
  onChange: (v: string) => void;
  onEnter: () => void;
  onGo: () => void;
};

const AddressBar: React.FC<Props> = ({ value, onChange, onEnter, onGo }) => (
  <div className="items-center gap-2 grid grid-cols-[1fr_auto]">
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onEnter();
      }}
      placeholder="Search or enter address"
      spellCheck={false}
      aria-label="Address bar"
      className="px-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-gray-300 w-full h-9 text-sm placeholder:text-sm"
    />
    <button
      onClick={onGo}
      disabled={!value.trim()}
      className="bg-white hover:bg-gray-50 disabled:opacity-40 px-4 border border-gray-200 rounded-lg h-9 text-sm disabled:cursor-not-allowed"
    >
      Visit
    </button>
  </div>
);

export default AddressBar;
