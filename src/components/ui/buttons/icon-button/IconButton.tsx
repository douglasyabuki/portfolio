import { twMerge } from 'tailwind-merge';

interface IconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  Icon: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>
}

export const IconButton = ({ className, Icon, ref, ...props }: IconButton) => {
  return (
    <button
      className={twMerge(
        'text-black-primary bg-white-primary flex size-12 items-center justify-center rounded-full border-[1px] border-transparent p-3 transition-all duration-150 enabled:cursor-pointer disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    >
      {Icon}
    </button>
  );
};
