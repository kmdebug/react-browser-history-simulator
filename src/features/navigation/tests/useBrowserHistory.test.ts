import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';

vi.mock('../lib/toAbsoluteURL', () => ({
  toAbsoluteURL: (raw: string) => raw,
}));

import { useBrowserHistory } from '../state/useBrowserHistory';

describe('useBrowserHistory', async () => {
  it('initialises with about:blank and no history', () => {
    const { result } = renderHook(() => useBrowserHistory());

    expect(result.current.past).toEqual([]);
    expect(result.current.present).toBe('about:blank');
    expect(result.current.future).toEqual([]);
    expect(result.current.addressBar).toBe('about:blank');
    expect(result.current.hasBack).toBe(false);
    expect(result.current.hasForward).toBe(false);
    expect(result.current.currentPageTitle).toBe('New Tab');
  });

  it('navigateTo pushes present to past, sets new present, clears future', () => {
    const { result } = renderHook(() => useBrowserHistory());

    act(() => {
      result.current.navigateTo('https://a.com');
    });

    expect(result.current.past).toEqual(['about:blank']);
    expect(result.current.present).toBe('https://a.com');
    expect(result.current.future).toEqual([]);
    expect(result.current.addressBar).toBe('https://a.com');
    expect(result.current.hasBack).toBe(true);
    expect(result.current.hasForward).toBe(false);
    expect(result.current.currentPageTitle).toBe('a.com');
  });

  it('navigateBack moves present to future and restores previous', () => {
    const { result } = renderHook(() => useBrowserHistory());

    act(() => {
      result.current.navigateTo('https://a.com');
    });
    act(() => {
      result.current.navigateBack();
    });

    expect(result.current.past).toEqual([]);
    expect(result.current.present).toBe('about:blank');
    expect(result.current.future).toEqual(['https://a.com']);
    expect(result.current.addressBar).toBe('about:blank');
    expect(result.current.hasBack).toBe(false);
    expect(result.current.hasForward).toBe(true);
    expect(result.current.currentPageTitle).toBe('New Tab');
  });

  it('navigateForward moves future item to present', () => {
    const { result } = renderHook(() => useBrowserHistory());

    act(() => {
      result.current.navigateTo('https://a.com');
      result.current.navigateBack();
    });
    act(() => {
      result.current.navigateForward();
    });

    expect(result.current.past).toEqual(['about:blank']);
    expect(result.current.present).toBe('https://a.com');
    expect(result.current.future).toEqual([]);
    expect(result.current.addressBar).toBe('https://a.com');
    expect(result.current.hasBack).toBe(true);
    expect(result.current.hasForward).toBe(false);
  });

  it('visiting a new page after going back clears the forward stack', () => {
    const { result } = renderHook(() => useBrowserHistory());

    act(() => {
      result.current.navigateTo('https://a.com');
    });

    act(() => {
      result.current.navigateBack();
    });

    act(() => {
      result.current.navigateTo('https://b.com');
    });

    expect(result.current.present).toBe('https://b.com');
    expect(result.current.past).toEqual(['about:blank']);
    expect(result.current.future).toEqual([]);
  });

  it('navigateHome sets present to about:blank and clears future', () => {
    const { result } = renderHook(() => useBrowserHistory());

    act(() => {
      result.current.navigateTo('https://a.com');
    });

    act(() => {
      result.current.navigateHome();
    });

    expect(result.current.present).toBe('about:blank');
    expect(result.current.past).toEqual(['about:blank', 'https://a.com']);
    expect(result.current.future).toEqual([]);
    expect(result.current.addressBar).toBe('about:blank');
  });

  it('onAddressKeyDown with Enter triggers navigateTo(addressBar)', () => {
    const { result } = renderHook(() => useBrowserHistory());

    act(() => {
      result.current.setAddressBar('https://c.com');
    });

    act(() => {
      result.current.onAddressKeyDown({ key: 'Enter' } as any);
    });

    expect(result.current.present).toBe('https://c.com');
    expect(result.current.addressBar).toBe('https://c.com');
    expect(result.current.past).toEqual(['about:blank']);
  });

  it('navigateTo ignores empty/identical urls but still syncs addressBar', () => {
    const { result } = renderHook(() => useBrowserHistory());

    act(() => {
      result.current.navigateTo('about:blank');
    });

    expect(result.current.present).toBe('about:blank');
    expect(result.current.addressBar).toBe('about:blank');

    act(() => {
      result.current.navigateTo('');
    });

    expect(result.current.present).toBe('about:blank');
    expect(result.current.addressBar).toBe('about:blank');
  });
});
