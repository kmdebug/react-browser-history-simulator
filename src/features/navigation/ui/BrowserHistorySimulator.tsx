import type { JSX } from 'react';
import { useBrowserHistory } from '../state/useBrowserHistory';
import HistoryToolbar from './HistoryToolbar';
import AddressBar from './AddressBar';
import PageView from './PageView';
import StacksInspector from './StacksInspector';

const BrowserHistorySimulator: React.FC = (): JSX.Element => {
  const {
    hasBack,
    hasForward,
    navigateBack,
    navigateForward,
    navigateHome,
    addressBar,
    setAddressBar,
    navigateTo,
    present,
    past,
    future,
    currentPageTitle,
    showStacks,
    setShowStacks,
  } = useBrowserHistory();

  return (
    <div className="gap-4 grid mx-auto p-6 border max-w-4xl text-gray-900">
      <div className="items-center gap-2 grid grid-cols-[auto_1fr_auto] bg-[#FCF8FA] pr-0 pl-2 rounded-t-lg h-12.5">
        <HistoryToolbar
          hasBack={hasBack}
          hasForward={hasForward}
          onBack={navigateBack}
          onForward={navigateForward}
          onHome={navigateHome}
        />

        <AddressBar
          value={addressBar}
          onChange={setAddressBar}
          onEnter={() => navigateTo(addressBar)}
        />
      </div>

      <PageView title={currentPageTitle} url={present} />

      <StacksInspector
        checked={showStacks}
        onToggle={setShowStacks}
        past={past}
        present={present}
        future={future}
      />
    </div>
  );
};

export default BrowserHistorySimulator;
