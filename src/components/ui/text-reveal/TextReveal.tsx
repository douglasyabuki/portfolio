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
  const timeoutRef = useRef<number | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    indexRef.current = 0;
    setDisplayedText('');

    if (!text) return;

    const tick = () => {
      setDisplayedText((prev) => {
        if (prev === text) return prev;

        const next = prev + text[indexRef.current];
        indexRef.current += 1;

        if (indexRef.current < text.length) {
          timeoutRef.current = window.setTimeout(tick, interval);
        } else {
          timeoutRef.current = null;
        }

        return next;
      });
    };

    timeoutRef.current = window.setTimeout(tick, interval);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [text, interval]);

  const showCaret =
    caretOptions?.display !== 'never' &&
    (caretOptions?.display === 'always' ||
      (caretOptions?.display === 'while-typing' && displayedText !== text));

  return (
    <div
      className={twMerge(
        'bg-opacity-0 text-white-primary w-full items-start text-start text-lg text-pretty',
        className,
      )}
    >
      <p className="text-inherit">
        {displayedText}
        {showCaret ? (
          <span
            className={twMerge(
              'bg-white-primary text-white-primary h-5 w-2 animate-pulse font-bold',
              caretOptions?.className,
            )}
          >
            |
          </span>
        ) : null}
      </p>
    </div>
  );
};
