import { useCallback, useMemo, useState } from 'react';
import { toAbsoluteURL } from '../lib/toAbsoluteURL';

export function useBrowserHistory() {
  const [past, setPast] = useState<string[]>([]);
  const [present, setPresent] = useState<string>('about:blank');
  const [future, setFuture] = useState<string[]>([]);

  const [addressBar, setAddressBar] = useState<string>(present);

  const [showStacks, setShowStacks] = useState<boolean>(false);

  const hasBack = past.length > 0;
  const hasForward = future.length > 0;

  const navigateTo = useCallback(
    (rawUrl: string) => {
      const url = toAbsoluteURL(rawUrl);
      if (!url || url === present) {
        setAddressBar(url || addressBar);
        return;
      }

      setPast((prev) => [...prev, present]);

      setPresent(url);

      setFuture([]);

      setAddressBar(url);
    },
    [present, addressBar]
  );

  const navigateBack = useCallback(() => {
    if (!hasBack) return;

    const previous = past[past.length - 1];
    const nextPast = past.slice(0, -1);
    const nextFuture = [...future, present];

    setPast(nextPast);
    setPresent(previous);
    setFuture(nextFuture);
    setAddressBar(previous);
  }, [hasBack, past, future, present]);

  const navigateForward = useCallback(() => {
    if (!hasForward) return;

    const next = future[future.length - 1];
    const nextFuture = future.slice(0, -1);
    const nextPast = [...past, present];

    setPast(nextPast);
    setPresent(next);
    setFuture(nextFuture);
    setAddressBar(next);
  }, [hasForward, past, future, present]);

  const navigateHome = useCallback(() => {
    if (present === 'about:blank') return;
    setPast((p) => [...p, present]);
    setPresent('about:blank');
    setFuture([]);
    setAddressBar('about:blank');
  }, [present]);

  const onAddressKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') navigateTo(addressBar);
  };

  const currentPageTitle = useMemo(() => {
    if (present === 'about:blank') return 'New Tab';
    try {
      const u = new URL(present);
      return u.hostname.replace(/^www\./, '');
    } catch {
      return present;
    }
  }, [present]);

  return {
    // state
    past,
    present,
    future,
    addressBar,
    showStacks,
    currentPageTitle,
    hasBack,
    hasForward,

    // setters
    setAddressBar,
    setShowStacks,

    // actions
    navigateTo,
    navigateBack,
    navigateForward,
    navigateHome,

    // handlers
    onAddressKeyDown,
  };
}
