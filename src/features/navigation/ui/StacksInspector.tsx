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
    <div className="flex justify-between items-center pl-2">
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onToggle(e.target.checked)}
          className="border-gray-300 rounded size-4"
        />
        Show stacks (for demo)
      </label>
    </div>

    {checked && (
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3 mt-3 pl-2">
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
    <div className="flex flex-col gap-2">
      {items.length === 0 ? (
        <div className="bg-gray-50 px-2 py-1 border border-gray-200 border-dashed rounded-md text-gray-500 text-xs text-center">
          ∅
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
