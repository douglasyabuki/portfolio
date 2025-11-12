import { twMerge } from 'tailwind-merge';

interface FloatingButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  isVisible?: boolean;
}

export const FloatingButton = ({ className, isVisible, children, ...props }: FloatingButton) => {
  return (
    <button
      className={twMerge(
        'bg-translucid-black hover:bg-black-primary focus:bg-black-primary fixed right-8 bottom-10 z-20 flex size-14 cursor-pointer items-center justify-center rounded-full p-2 text-white backdrop-blur-md duration-150 ease-in-out',
        isVisible ? 'translate-x-0' : 'translate-x-[100vw]',
        className,
      )}
      onContextMenu={(e) => e.preventDefault()}
      {...props}
    >
      {children}
    </button>
  );
};
