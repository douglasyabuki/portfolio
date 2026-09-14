import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface LogoLoopProps {
  logos: { id: string; title?: string; node: ReactNode }[];
  speed?: number;
  gap?: number;
  ariaLabel?: string;
}

export const LogoLoop = ({ logos, speed = 20, gap = 25, ariaLabel = 'Logos' }: LogoLoopProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLUListElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, copies: 2 });
  const animated = logos.length > 1 && speed > 0;

  useEffect(() => {
    const container = containerRef.current;
    const sequence = sequenceRef.current;
    if (!container || !sequence) return;

    const measure = () => {
      const width = sequence.getBoundingClientRect().width;
      const copies = width > 0 ? Math.max(2, Math.ceil(container.clientWidth / width) + 1) : 2;
      setDimensions((previous) =>
        previous.width === width && previous.copies === copies ? previous : { width, copies },
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(sequence);
    return () => observer.disconnect();
  }, [logos.length, gap]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let previousTime: number | undefined;

    const animate = (time: number) => {
      const delta = previousTime === undefined ? 0 : Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;
      const target = hovered || focused ? 0 : speed;
      // Ease the velocity so pausing and resuming preserve the current position.
      const easing = 1 - Math.exp(-delta / 0.18);
      velocityRef.current += (target - velocityRef.current) * easing;
      if (Math.abs(velocityRef.current - target) < 0.1) velocityRef.current = target;
      offsetRef.current = (offsetRef.current + velocityRef.current * delta) % dimensions.width;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      if (target !== 0 || velocityRef.current !== 0) frame = requestAnimationFrame(animate);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      previousTime = undefined;
      if (preference.matches || !animated || dimensions.width <= 0) {
        track.style.transform = 'none';
        offsetRef.current = 0;
        velocityRef.current = 0;
        return;
      }
      frame = requestAnimationFrame(animate);
    };

    start();
    preference.addEventListener('change', start);
    return () => {
      cancelAnimationFrame(frame);
      preference.removeEventListener('change', start);
    };
  }, [animated, dimensions.width, speed, hovered, focused]);

  if (!logos.length) return null;

  const style = {
    '--logo-loop-gap': `${gap}px`,
  } as CSSProperties;

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-white motion-safe:data-[animated=true]:[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%_-_16px),transparent)]"
      style={style}
      role="region"
      aria-label={ariaLabel}
      tabIndex={animated ? 0 : undefined}
      data-animated={animated}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max motion-safe:data-[ready=true]:will-change-transform motion-reduce:w-full"
        data-ready={animated && dimensions.width > 0}
      >
        {Array.from({ length: animated ? dimensions.copies : 1 }, (_, copy) => (
          <ul
            key={copy}
            ref={copy === 0 ? sequenceRef : undefined}
            className="m-0 flex shrink-0 list-none items-center gap-[var(--logo-loop-gap)] py-1 pr-[var(--logo-loop-gap)] pl-0 motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:pr-0 motion-reduce:aria-hidden:hidden"
            aria-hidden={copy > 0 ? true : undefined}
          >
            {logos.map(({ id, title, node }) => (
              <li key={id} className="shrink-0" title={title ?? id}>
                <span
                  inert={copy > 0 ? true : undefined}
                  className={copy > 0 ? 'pointer-events-none' : undefined}
                >
                  {node}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
