import { useEffect, useRef, useState } from 'react';

type UseIntersectionObserverReturn<T extends HTMLDivElement & HTMLElement> = {
  containerRef: React.RefObject<T | null>;
  isVisible: boolean;
};

export const useIntersectionObserver = <T extends HTMLDivElement & HTMLElement>(
  params?: IntersectionObserverInit,
): UseIntersectionObserverReturn<T> => {
  const containerRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const current = containerRef.current;
    const observer = new IntersectionObserver(callbackFunction, params);

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [params]);

  return { containerRef, isVisible };
};
