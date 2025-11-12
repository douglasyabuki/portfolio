import { type IconOption } from '@/icons/Icons';
import { twMerge } from 'tailwind-merge';
import { DynamicIcon } from '../../dynamic-icon/DynamicIcon';

interface ZoomOutButton {
  title?: string;
  description?: string;
  isToggled?: boolean;
  onClick: () => void;
  className?: string;
  iconName?: IconOption;
}

export const ZoomOutButton = ({
  title,
  description,
  isToggled = false,
  onClick,
  className = '',
  iconName = 'Gamepad',
}: ZoomOutButton) => {
  const hasTitleAndDescription = !!title && !!description;
  return (
    <button
      className={twMerge(
        'border-black-primary text-black-primary ease-in-secondary group relative flex size-[4.375rem] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-[3px] bg-[var(--color-background-primary)] font-bold shadow-md transition-all duration-[400ms] md:size-[6.25rem]',
        "before:absolute before:bottom-[-150%] before:left-1/2 before:z-[1] before:size-[300%] before:[transform:translateX(-50%)_scale(0)] before:rounded-full before:bg-[#316b58] before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(0.19,1,0.22,1)] before:content-['']",
        'hover:before:[transform:translateX(-50%)_scale(1)] focus:before:[transform:translateX(-50%)_scale(1)]',
        'hover:-translate-x-[0.25rem] hover:-translate-y-[0.25rem] hover:shadow-lg focus:-translate-x-[0.25rem] focus:-translate-y-[0.25rem] focus:shadow-lg',
        'active:translate-x-[0.125rem] active:translate-y-[0.125rem] active:shadow-sm',
        isToggled ? 'bg-[#316b58]' : 'bg-[var(--color-background-primary)]',
        className,
      )}
      onClick={onClick}
      onContextMenu={(e) => e.preventDefault()}
    >
      <span
        className={twMerge(
          'ease-in-primary absolute top-[50%] left-[50%] z-[2] flex size-[3.02885rem] -translate-x-[50%] -translate-y-[50%] items-center justify-center rounded-full bg-[#0f1715] shadow-md transition-all duration-[400ms] md:size-[4.3125rem]',
          hasTitleAndDescription
            ? 'group-hover:top-[28%] group-hover:size-[1.68269rem] group-focus:top-[28%] group-focus:size-[1.68269rem] md:group-hover:size-[2.375rem] md:group-focus:size-[2.375rem]'
            : 'group-hover:top-[39%] group-hover:size-[2.36905rem] group-focus:top-[39%] group-focus:size-[2.36905rem] md:group-hover:size-[3.34375rem] md:group-focus:size-[3.34375rem]',
          isToggled ? 'text-green-600' : 'text-white-primary/50',
        )}
      >
        <DynamicIcon
          iconName={iconName}
          className={twMerge(
            'ease-in-primary size-[1.8173rem] transition-all duration-[400ms] md:size-[3.375rem]',
            hasTitleAndDescription
              ? 'group-hover:scale-[60%] group-focus:scale-[60%]'
              : 'group-hover:scale-[80%] group-focus:scale-[80%]',
          )}
        />
      </span>
      <div
        className={twMerge(
          'ease-in-primary absolute right-0 bottom-[0.6058rem] left-0 z-[2] flex translate-y-4 flex-col items-center justify-center gap-0 text-center leading-0 opacity-0 transition-all duration-[400ms] md:bottom-[0.875rem] md:gap-[0.125rem] md:leading-[1.3]',
          'select-none group-hover:translate-y-1 group-hover:opacity-100 group-focus:translate-y-1 group-focus:opacity-100 md:group-hover:translate-y-[0.1875rem] md:group-focus:translate-y-[0.1875rem]',
        )}
      >
        <span
          className={twMerge(
            'text-xxs font-medium md:text-xs',
            'group-hover:text-white-primary group-focus:text-white-primary',
          )}
        >
          {title}
        </span>
        <span
          className={twMerge(
            'text-xs font-bold tracking-tight md:text-sm',
            'group-hover:text-white-primary group-focus:text-white-primary',
          )}
        >
          {description}
        </span>
      </div>
    </button>
  );
};
