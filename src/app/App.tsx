import type { JSX } from 'react';
import { BrowserHistorySimulator } from '../features/navigation';

export default function App(): JSX.Element {
  return (
    <>
      <BrowserHistorySimulator />

      <footer className="bottom-0 fixed flex flex-wrap justify-between items-center gap-1 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)] px-6 py-2 w-full font-sans font-medium">
        <div className="flex items-center gap-4">
          <a
            className="text-[#1d1d1d] text-xs hover:underline cursor-pointer"
            href="mailto:kaissar.mouelhi@outlook.com"
          >
            Email
          </a>
          <a
            className="text-[#1d1d1d] text-xs hover:underline cursor-pointer"
            rel="noreferrer"
            href="https://github.com/kmdebug/react-browser-history-simulator.git"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="text-[#1d1d1d] text-xs hover:underline cursor-pointer"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kaissar-mouelhi/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-[#1d1d1d] text-xs">
          <a
            className="hover:underline"
            rel="noreferrer"
            href="https://www.kmdebug.dev/"
            target="_blank"
          >
            Kaissar Mouelhi | Portfolio
          </a>
        </p>
      </footer>
    </>
  );
}
