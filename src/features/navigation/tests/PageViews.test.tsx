import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageView from '../ui/PageView';

describe('PageView', () => {
  it('renders the title and URL', () => {
    render(<PageView title="Home" url="about:blank" />);

    expect(screen.getByText('Home')).toBeInTheDocument();

    expect(screen.getByText('URL:')).toBeInTheDocument();

    const code = screen.getByText('about:blank');

    expect(code.tagName.toLowerCase()).toBe('code');
  });

  it('shows instructional copy with a visible Enter key hint', () => {
    render(<PageView title="X" url="y" />);

    expect(screen.getByText(/This is a mock page\./i)).toBeInTheDocument();

    expect(
      screen.getByText(/Back and Forward enable only when applicable/i)
    ).toBeInTheDocument();

    const kbd = screen.getByText('Enter');

    expect(kbd.tagName.toLowerCase()).toBe('kbd');
  });

  it('updates when props change (rerender)', () => {
    const { rerender } = render(<PageView title="Page A" url="/a" />);

    expect(screen.getByText('Page A')).toBeInTheDocument();
    expect(screen.getByText('/a')).toBeInTheDocument();

    rerender(<PageView title="Page B" url="/b" />);

    expect(screen.queryByText('Page A')).not.toBeInTheDocument();
    expect(screen.getByText('Page B')).toBeInTheDocument();
    expect(screen.queryByText('/a')).not.toBeInTheDocument();
    expect(screen.getByText('/b').tagName.toLowerCase()).toBe('code');
  });
});
