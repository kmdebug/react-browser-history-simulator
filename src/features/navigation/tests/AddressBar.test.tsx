import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import AddressBar from '../ui/AddressBar';

function Harness({
  onChange = () => {},
  onEnter = () => {},
  initial = '',
}: {
  onChange?: (v: string) => void;
  onEnter?: () => void;
  initial?: string;
}) {
  const [value, setValue] = useState(initial);
  return (
    <AddressBar
      value={value}
      onChange={(v) => {
        setValue(v);
        onChange(v);
      }}
      onEnter={onEnter}
    />
  );
}

describe('AddressBar', () => {
  it('renders with placeholder and aria label', () => {
    render(<Harness initial="" />);

    const input = screen.getByLabelText('Address bar');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Search Google or type a URL');
    expect(input).toHaveAttribute('spellcheck', 'false');
  });

  it('calls onChange and reflects typed value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Harness onChange={onChange} />);

    const input = screen.getByLabelText('Address bar');

    await user.type(input, 'https://example.com');

    expect(onChange).toHaveBeenLastCalledWith('https://example.com');
    expect(input).toHaveValue('https://example.com');
  });

  it('fires onEnter when pressing Enter and not for other keys', async () => {
    const user = userEvent.setup();
    const onEnter = vi.fn();

    render(<Harness onEnter={onEnter} />);

    const input = screen.getByLabelText('Address bar');

    await user.type(input, 'abc');

    expect(onEnter).not.toHaveBeenCalled();

    await user.type(input, '{enter}');

    expect(onEnter).toHaveBeenCalledTimes(1);
  });
});
