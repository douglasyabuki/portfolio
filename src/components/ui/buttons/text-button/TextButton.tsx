import { twMerge } from 'tailwind-merge';

interface TextButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant?: Variants;
}

type Variants = 'primary' | 'secondary';

const variantStyle: Record<Variants, string> = {
  primary: 'bg-white-primary text-black-primary hover:text-white-primary hover:bg-black-primary',
  secondary: 'bg-black-primary text-white-primary hover:text-black-primary hover:bg-white-primary',
};

export const TextButton = ({ className, children, variant = 'primary', ...props }: TextButton) => {
  return (
    <button
      className={twMerge(
        'text-black-primary xs:text-lg border-white-primary/10 box-border flex h-auto w-auto min-w-[9.5rem] cursor-pointer items-center justify-center gap-2 rounded-full border-[1px] px-2 py-1 font-semibold shadow-lg shadow-black/10 transition-all duration-150 md:text-xl xl:min-w-[11.5rem] 2xl:px-4 2xl:py-1 2xl:text-2xl',
        variantStyle[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
