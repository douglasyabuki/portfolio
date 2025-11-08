import type { IconOption } from '@/icons/Icons';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { DynamicIcon } from '../../dynamic-icon/DynamicIcon';

type Variant = 'primary' | 'secondary';

interface ExpandButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconName: IconOption;
  label: string;
  variant?: Variant;
  collapsedWidth?: number;
  expandedWidth?: number;
}

const variantStyle: Record<Variant, string> = {
  primary:
    'bg-white-primary text-black-primary hover:text-white-primary hover:bg-black-primary focus:text-white-primary focus:bg-black-primary',
  secondary:
    'bg-black-primary text-white-primary hover:text-black-primary hover:bg-white-primary focus:text-black-primary focus:bg-white-primary',
};

export const ExpandButton = ({
  className,
  iconName,
  label,
  variant = 'primary',
  collapsedWidth = 48,
  expandedWidth = 200,
  ...props
}: ExpandButton) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button
      aria-label={label}
      className={twMerge(
        'group box-border inline-flex h-12 w-12 cursor-pointer items-center justify-start gap-2 overflow-hidden rounded-lg px-1 py-1 whitespace-nowrap select-none',
        'transition-all duration-200 ease-out',
        'hover:w-auto hover:max-w-[var(--cb-expanded)] hover:px-2 active:scale-[0.97]',
        'focus:w-auto focus:max-w-[var(--cb-expanded)] focus:px-2 active:scale-[0.97]',
        'focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:outline-none dark:focus-visible:ring-white/30',
        'shadow-sm shadow-black/10',
        variantStyle[variant],
        className,
      )}
      onContextMenu={(e) => e.preventDefault()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        maxWidth: isHovered || isFocused ? expandedWidth : collapsedWidth,
        transition: 'max-width 200ms ease-out, transform 120ms ease-out',
        ...props.style,
      }}
      {...props}
    >
      <DynamicIcon iconName={iconName} className="flex size-10 shrink-0 text-current" />
      <span
        className={twMerge(
          'xs:text-lg invisible translate-x-1 font-bold opacity-0 md:text-xl 2xl:text-2xl',
          'transition-all duration-200 ease-out',
          'group-hover:visible group-hover:translate-x-0 group-hover:opacity-100',
          'group-focus:visible group-focus:translate-x-0 group-focus:opacity-100',
        )}
      >
        {label}
      </span>
    </button>
  );
};
