import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

type ScreenPosition =
  | 'top'
  | 'top_right'
  | 'right'
  | 'bottom_right'
  | 'bottom'
  | 'bottom_left'
  | 'left'
  | 'top_left'
  | 'center';

interface Portal {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  positionOnScreen?: ScreenPosition;
  backdrop?: boolean;
  zIndex?: number;
}

export type PortalOptions = Partial<Portal>;

const childrenPosition: Record<ScreenPosition | string, string> = {
  top: 'items-start justify-center',
  top_right: 'items-start justify-end',
  right: 'items-center justify-end',
  bottom_right: 'items-end justify-end',
  bottom: 'items-end justify-center',
  bottom_left: 'items-end justify-start',
  left: 'items-center justify-start',
  top_left: 'items-start justify-start',
  center: 'items-center justify-center',
};

export const Portal = ({
  className,
  isOpen,
  onClose,
  children,
  positionOnScreen = 'center',
  backdrop = false,
  zIndex = 52,
}: Portal) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className={twMerge(
              'absolute top-0 right-0 bottom-0 left-0 flex h-screen w-screen transition-opacity duration-150 ease-in',
              backdrop && 'bg-black/20 backdrop-blur-sm',
              childrenPosition[positionOnScreen],
              className,
            )}
            style={{ zIndex }}
            onClick={onClose}
          >
            {children}
          </div>,
          document.getElementById('root')!,
        )}
    </>
  );
};
