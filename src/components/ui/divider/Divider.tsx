import { twMerge } from 'tailwind-merge';

interface Divider {
  className?: string;
}

export const Divider = ({ className }: Divider) => {
  return <span className={twMerge('bg-purplish-gray/20 h-[1px] w-full', className)} />;
};
