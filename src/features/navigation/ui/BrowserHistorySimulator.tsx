import type { JSX } from 'react';
import { useBrowserHistory } from '../state/useBrowserHistory';
import HistoryToolbar from './HistoryToolbar';

const BrowserHistorySimulator: React.FC = (): JSX.Element => {
  const { hasBack, hasForward, navigateBack, navigateForward, navigateHome } =
    useBrowserHistory();

  return (
    <div className="gap-4 grid mx-auto p-6 max-w-4xl text-gray-900">
      <div className="items-center gap-2 grid grid-cols-[auto_1fr_auto] bg-white shadow-sm px-2 py-2 border border-gray-200 rounded-xl">
        <HistoryToolbar
          hasBack={hasBack}
          hasForward={hasForward}
          onBack={navigateBack}
          onForward={navigateForward}
          onHome={navigateHome}
        />

        <div className="w-16" />
      </div>
    </div>
  );
};

export default BrowserHistorySimulator;
