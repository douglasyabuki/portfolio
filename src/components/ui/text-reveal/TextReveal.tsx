import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type CaretDisplayOptions = 'always' | 'never' | 'while-typing';
interface TextRevealProps {
  className?: string;
  text: string;
  interval?: number;
  caretOptions?: {
    className?: string;
    display?: CaretDisplayOptions;
  };
}

export const TextReveal = ({
  className = '',
  text,
  interval = 20,
  caretOptions = { className: '', display: 'always' },
}: TextRevealProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    // If already finished, do nothing (prevents new timeouts)
    if (!text || displayedText === text) return;

    // Clear any prior timer
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Continue from current progress or reset if starting fresh
    if (!displayedText) indexRef.current = 0;
    else indexRef.current = displayedText.length;

    const tick = () => {
      // Extra guard: stop if done
      if (indexRef.current >= text.length || displayedText === text) return;

      const next = (prev: string) => {
        // If another render already finished it, keep as is
        if (prev === text) return prev;
        const n = prev + text[indexRef.current];
        indexRef.current += 1;
        // Schedule next only if there’s more to reveal
        if (indexRef.current < text.length && n !== text) {
          timeoutRef.current = setTimeout(tick, interval);
        }
        return n;
      };

      setDisplayedText(next);
    };

    // Kick off
    timeoutRef.current = setTimeout(tick, interval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, interval, displayedText]);

  return (
    <div
      className={twMerge(
        'bg-opacity-0 text-white-primary w-full items-start text-start text-lg font-bold text-pretty',
        className,
      )}
    >
      <p className="text-inherit">
        {displayedText}
        {caretOptions?.display !== 'never' &&
        (caretOptions?.display === 'always' ||
          (caretOptions?.display === 'while-typing' && displayedText !== text)) ? (
          <span
            className={twMerge(
              'bg-white-primary text-white-primary h-5 w-2 animate-pulse font-bold',
              caretOptions.className,
            )}
          >
            |
          </span>
        ) : null}
      </p>
    </div>
  );
};
