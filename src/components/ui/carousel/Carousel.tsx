import { Icons } from '@/icons/Icons';
import { useRef, useState } from 'react';
import { IconButton } from '../buttons/icon-button/IconButton';

interface CarouselProps<T> {
  list: T[];
  render: (item: T) => React.ReactNode;
  getId: (item: T) => string;
  offsetPx?: number;
  loop?: boolean;
}

export const Carousel = <T,>({
  list,
  render,
  getId,
  offsetPx = 0,
  loop = false,
}: CarouselProps<T>) => {
  const [currentItem, setCurrentItem] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  if (!list?.length) return null;

  const clamp = (n: number) => Math.max(0, Math.min(n, list.length - 1));
  const wrap = (n: number) => ((n % list.length) + list.length) % list.length;

  const scrollToIndex = (idx: number) => {
    const container = containerRef.current;
    if (!container) return;

    const id = getId(list[idx]);
    const el = document.getElementById(id);
    if (!el) return;

    const targetX = el.offsetLeft - offsetPx;

    container.scrollTo({
      left: targetX,
      behavior: 'smooth',
    });
  };

  const go = (next: number) => {
    const idx = loop ? wrap(next) : clamp(next);
    setCurrentItem(idx);
    scrollToIndex(idx);
  };

  const atStart = currentItem === 0;
  const atEnd = currentItem === list.length - 1;

  return (
    <div className="flex w-full flex-col items-center">
      <div
        ref={containerRef}
        className="scrollbar-hide flex w-[100dvw] snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
      >
        {list.map((item) => {
          const id = getId(item);
          return (
            <div key={id} id={id} className="m-auto flex min-w-full snap-start">
              {render(item)}
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        <IconButton
          className="text-white-primary bg-transparent p-0"
          Icon={<Icons.CircleChevronLeft className="clay-icon" />}
          onClick={() => go(currentItem - 1)}
          disabled={!loop && atStart}
        />
        <IconButton
          className="text-white-primary bg-transparent p-0"
          Icon={<Icons.CircleChevronRight className="clay-icon" />}
          onClick={() => go(currentItem + 1)}
          disabled={!loop && atEnd}
        />
      </div>
    </div>
  );
};
