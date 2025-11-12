import { useWindowEvents } from '@/hooks/use-windows-events';
import { useLayoutEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { MenuRoot } from '../menu/menu-root/MenuRoot';
import { Portal } from '../portal/Portal';

interface Dropdown extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  targetRect: DOMRect | null;
  onClose: () => void;
  directionChange?: boolean;
  offsetX?: number;
  offsetY?: number;
}

export const Dropdown = ({
  className,
  children,
  targetRect,
  onClose,
  directionChange = true,
  offsetX = 0,
  offsetY = 0,
  ...props
}: Dropdown) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownSize, setDropdownSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (dropdownRef.current) {
      const { width, height } = dropdownRef.current.getBoundingClientRect();
      setDropdownSize({ width, height });
    }
  }, [children]);

  useWindowEvents([{ eventName: 'resize', handler: onClose }]);

  let dropdownX = 0;
  let dropdownY = 0;
  if (targetRect !== null) {
    const { left, top, height, width } = targetRect;
    const { innerWidth, innerHeight } = window;
    const { width: dropdownWidth, height: dropdownHeight } = dropdownSize;

    const overflowX = Math.max(left + width - dropdownWidth - innerWidth, 0);
    const overflowY = Math.max(top + height + dropdownHeight - innerHeight, 0);

    dropdownX = left + width - dropdownWidth - overflowX;
    dropdownY = top + height;

    if (overflowY > 0) {
      dropdownY = directionChange ? top - dropdownHeight : dropdownY - overflowY;
    }
  }

  return (
    <Portal
      onClose={onClose}
      isOpen={targetRect !== null}
      positionOnScreen="top_left"
      className="fixed"
      zIndex={60}
    >
      <MenuRoot
        ref={dropdownRef}
        className={twMerge('flex flex-col shadow-xl', className)}
        style={{
          position: 'relative',
          left: 0,
          top: 0,
          transform: `translate3d(${dropdownX + offsetX}px, ${dropdownY + offsetY}px, 0)`,
        }}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </MenuRoot>
    </Portal>
  );
};
