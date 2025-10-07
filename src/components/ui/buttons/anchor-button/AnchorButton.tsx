import { scrollToId } from '@/utils/dom-utils';
import { twMerge } from 'tailwind-merge';

type Variants = 'primary' | 'secondary';

interface AnchorButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  variant?: Variants;
  children: React.ReactNode;
  href: string;
  Icon?: React.ReactElement;
}

const variantStyle: Record<Variants, string> = {
  primary: 'bg-white-primary text-black-primary hover:text-white-primary hover:bg-black-primary',
  secondary: 'bg-black-primary text-white-primary hover:text-black-primary hover:bg-white-primary',
};

export const AnchorButton = ({
  className,
  variant = 'primary',
  children,
  Icon,
  href,
  ...props
}: AnchorButton) => {
  return (
    <a
      className={twMerge(
        'text-black-primary xs:text-lg border-white-primary/10 box-border flex h-auto w-auto min-w-[9.5rem] items-center justify-center gap-2 rounded-full border-[1px] px-2 py-1 font-semibold shadow-lg shadow-black/10 transition-all duration-150 md:text-xl xl:min-w-[11.5rem] 2xl:px-4 2xl:py-1 2xl:text-2xl',
        variantStyle[variant],
        className,
      )}
      onClick={(e) => {
        e.preventDefault();
        scrollToId(href);
      }}
      href={href}
      {...props}
    >
      {Icon && <span className="flex size-6 xl:size-8">{Icon}</span>}
      {children}
    </a>
  );
};
