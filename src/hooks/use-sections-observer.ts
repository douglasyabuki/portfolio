import { syncActiveLocationId } from '@/utils/dom-utils';
import { useEffect, useMemo, useState } from 'react';

export const useSectionsObserver = (
  ids: string[],
  options?: IntersectionObserverInit,
  syncViewAndUrl?: boolean,
) => {
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  const elements = useMemo<HTMLElement[]>(() => {
    if (typeof document === 'undefined') return [];
    return ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
  }, [ids]);

  useEffect(() => {
    if (!elements.length || typeof IntersectionObserver === 'undefined') return;

    const defaultThresholds = Array.from({ length: 11 }, (_, i) => +(i / 10).toFixed(2));
    const obs = new IntersectionObserver(
      (entries) => {
        setRatios((prev) => {
          const next = { ...prev };
          for (const entry of entries) {
            const id = (entry.target as HTMLElement).id;
            next[id] = entry.intersectionRatio;
          }
          return next;
        });
      },
      {
        threshold: options?.threshold ?? defaultThresholds,
        root: options?.root ?? null,
        rootMargin: options?.rootMargin ?? '0px',
      }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [elements, options?.root, options?.rootMargin, options?.threshold]);

  useEffect(() => {
    if (!ids.length) return;

    let bestId: string | null = null;
    let bestRatio = -1;

    for (const id of ids) {
      const r = ratios[id] ?? 0;
      if (r > bestRatio) {
        bestRatio = r;
        bestId = id;
      }
    }

    if (bestId) setActiveId((prev) => (prev === bestId ? prev : bestId));
  }, [ratios, ids]);

  useEffect(() => {
    if (syncViewAndUrl) syncActiveLocationId(activeId);
  }, [activeId, syncViewAndUrl]);

  return { ratios, activeId } as const;
};
