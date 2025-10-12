import React from 'react';

type Props = {
  value: string;
  onChange: (v: string) => void;
  onEnter: () => void;
};

const AddressBar: React.FC<Props> = ({ value, onChange, onEnter }) => (
  <div className="flex-1 items-center gap-2 grid grid-cols-[1fr_auto] h-full">
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onEnter();
      }}
      placeholder="Search Google or type a URL"
      spellCheck={false}
      aria-label="Address bar"
      className="bg-[#EAE9ED] px-3 rounded-full outline-none focus:ring-1 focus:ring-black w-full h-9 text-[#1D1D1D] text-sm placeholder:text-sm"
    />
  </div>
);

export default AddressBar;
