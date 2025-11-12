import { useRef, useState } from 'react';

export const useTargetRect = () => {
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const getTargetRect = () => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      setTargetRect(rect);
    }
  };

  const clearTargetRect = () => {
    setTargetRect(null);
  };

  return { targetRect, getTargetRect, clearTargetRect, componentRef };
};
