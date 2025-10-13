import type { JSX } from 'react';

type Props = {
  checked: boolean;
  onToggle: (v: boolean) => void;
  past: string[];
  present: string;
  future: string[];
};

const StacksInspector: React.FC<Props> = ({
  checked,
  onToggle,
  past,
  present,
  future,
}): JSX.Element => (
  <>
    <div className="flex justify-between items-center px-4">
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onToggle(e.target.checked)}
          className="border-gray-300 rounded size-4"
        />
        Show stacks
      </label>
    </div>

    {checked && (
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3 mt-3 px-4">
        <HistoryColumn title="Past (back stack)" items={past} highlightLast />
        <HistoryColumn title="Present" items={[present]} />
        <HistoryColumn
          title="Future (forward stack)"
          items={future}
          highlightLast
        />
      </div>
    )}
  </>
);

const HistoryColumn: React.FC<{
  title: string;
  items: string[];
  highlightLast?: boolean;
}> = ({ title, items, highlightLast }): JSX.Element => (
  <div className="bg-white p-3 border border-gray-200 border-dashed rounded-lg">
    <div className="mb-2 font-medium text-gray-500 text-xs">{title}</div>
    <div className="flex flex-col gap-2 min-h-40">
      {items.length === 0 ? (
        <div className="flex justify-center items-center bg-gray-50 px-2 py-1 border border-gray-200 border-dashed rounded-md min-h-40 text-gray-500 text-xs text-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M195.51,62.66,212.44,44A6,6,0,1,0,203.56,36L186.63,54.58A94,94,0,0,0,60.49,193.34L43.56,212A6,6,0,0,0,52.44,220l16.93-18.62A94,94,0,0,0,195.51,62.66ZM46,128A81.93,81.93,0,0,1,178.53,63.49L68.59,184.43A81.69,81.69,0,0,1,46,128Zm82,82a81.57,81.57,0,0,1-50.53-17.49L187.41,71.57A81.94,81.94,0,0,1,128,210Z"></path>
          </svg>
        </div>
      ) : (
        items.map((url, item) => {
          const isTop = highlightLast && item === items.length - 1;
          return (
            <div
              key={`${url}-${item}`}
              className={[
                'truncate rounded-md border bg-white px-2 py-1 text-xs font-mono',
                isTop
                  ? 'border-gray-300 ring-1 ring-gray-300'
                  : 'border-gray-200',
              ].join(' ')}
              title={url}
            >
              {url}
            </div>
          );
        })
      )}
    </div>
  </div>
);

export default StacksInspector;
