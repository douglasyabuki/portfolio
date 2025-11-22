import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type GridImage = {
  className?: string;
  src: string;
  alt?: string;
  rows?: number;
  cols?: number;
  grayscaleAnimation?: boolean;
  pixelFadeInDuration?: number; // ms, default 1000
  maxAnimationDelay?: number; // ms, default 1200
  colorRevealDelay?: number; // ms, default 1300
  gapXPercent?: number; // percent of container width, default 0
  gapYPercent?: number; // percent of container height, default 0
  seamOverlapPercent?: number; // overlap used only when gap=0, default 0.2
  minGrid?: number; // default 1
  maxGrid?: number; // default 64 (safety guard; raise/disable if you want)
};

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

const assertValidGrid = (rows: number, cols: number, minGrid: number, maxGrid: number) => {
  const ok =
    Number.isInteger(rows) &&
    Number.isInteger(cols) &&
    rows >= minGrid &&
    cols >= minGrid &&
    rows <= maxGrid &&
    cols <= maxGrid;

  if (!ok) throw new Error(`rows/cols must be integers in [${minGrid}, ${maxGrid}].`);
};

type GridPiece = { clipPath: string; delay: number; idx: number };

const buildPieces = (
  rows: number,
  cols: number,
  gapXPercent: number,
  gapYPercent: number,
  seamOverlapPercent: number,
  maxAnimationDelay: number,
): GridPiece[] => {
  const total = rows * cols;
  const cellW = 100 / cols;
  const cellH = 100 / rows;

  const gapX = clamp(gapXPercent, 0, Math.max(0, cellW - 0.0001));
  const gapY = clamp(gapYPercent, 0, Math.max(0, cellH - 0.0001));

  const bleedX = gapX === 0 ? seamOverlapPercent : 0;
  const bleedY = gapY === 0 ? seamOverlapPercent : 0;

  const gridPieces: GridPiece[] = new Array(total);

  for (let index = 0; index < total; index++) {
    const row = Math.floor(index / cols);
    const col = index % cols;

    let x1 = col * cellW + gapX / 2;
    let x2 = (col + 1) * cellW - gapX / 2;
    let y1 = row * cellH + gapY / 2;
    let y2 = (row + 1) * cellH - gapY / 2;

    x1 = clamp(x1 - bleedX / 2, 0, 100);
    x2 = clamp(x2 + bleedX / 2, 0, 100);
    y1 = clamp(y1 - bleedY / 2, 0, 100);
    y2 = clamp(y2 + bleedY / 2, 0, 100);

    const clipPath = `polygon(
      ${x1}% ${y1}%,
      ${x2}% ${y1}%,
      ${x2}% ${y2}%,
      ${x1}% ${y2}%
    )`;

    const delay = Math.random() * maxAnimationDelay;
    gridPieces[index] = { clipPath, delay, idx: index };
  }

  return gridPieces;
};

export const GridImage = ({
  className,
  src,
  alt,
  rows = 4,
  cols = 6,
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  gapXPercent = 0,
  gapYPercent = 0,
  seamOverlapPercent = 0.2,
  minGrid = 1,
  maxGrid = 64,
}: GridImage) => {
  assertValidGrid(rows, cols, minGrid, maxGrid);
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const rafIdRef = useRef<number | null>(null);
  const colorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useLayoutEffect(() => {
    setShouldAnimate(false);
    setIsVisible(false);
    setShowColor(false);

    rafIdRef.current = requestAnimationFrame(() => {
      setShouldAnimate(true);
      setIsVisible(true);
      colorTimeoutRef.current = setTimeout(() => setShowColor(true), colorRevealDelay);
    });

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (colorTimeoutRef.current !== null) {
        clearTimeout(colorTimeoutRef.current);
        colorTimeoutRef.current = null;
      }
    };
  }, [src, colorRevealDelay]);

  const gridPieces = useMemo(
    () => buildPieces(rows, cols, gapXPercent, gapYPercent, seamOverlapPercent, maxAnimationDelay),
    [rows, cols, gapXPercent, gapYPercent, seamOverlapPercent, maxAnimationDelay],
  );

  return (
    <div className={twMerge('relative flex items-center! justify-center! select-none', className)}>
      {/* Ghost image to set container dimensions */}
      <img
        src={src}
        alt=""
        className="invisible relative z-0 h-auto max-h-full w-auto max-w-full object-cover opacity-0"
        aria-hidden="true"
      />

      {gridPieces.map(({ clipPath, delay, idx }) => (
        <div
          key={idx}
          className={twMerge(
            'absolute inset-0 transition-all ease-out',
            isVisible ? 'opacity-100' : 'opacity-0',
          )}
          style={{
            clipPath,
            transitionDelay: shouldAnimate ? `${delay}ms` : '0ms',
            transitionDuration: shouldAnimate ? `${pixelFadeInDuration}ms` : '0ms',
          }}
        >
          <img
            key={`img-${idx}`}
            src={src}
            alt={alt ? `${alt}-${idx}` : `Pixel piece ${idx + 1}`}
            className={twMerge(
              'z-1 rounded-[2.5rem] object-cover',
              grayscaleAnimation && (showColor ? 'grayscale-0' : 'grayscale'),
            )}
            style={{
              transition:
                grayscaleAnimation && shouldAnimate
                  ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                  : 'none',
              transform: 'translateZ(0)',
              willChange: grayscaleAnimation ? 'filter' : undefined,
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};
