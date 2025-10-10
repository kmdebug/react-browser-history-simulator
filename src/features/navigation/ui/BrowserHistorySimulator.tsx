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
    <div className="gap-4 grid mx-auto p-6 max-w-4xl text-gray-900">
      <div className="items-center gap-2 grid grid-cols-[auto_1fr_auto] bg-white px-2 py-2 border border-gray-200 rounded-lg">
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
          onGo={() => navigateTo(addressBar)}
        />

        <div className="w-16" />
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
