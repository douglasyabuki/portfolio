import { twMerge } from 'tailwind-merge';

interface Collapsible {
  className?: string;
  isCollapsed: boolean;
  children: React.ReactNode;
}

export const Collapsible = ({ className, isCollapsed, children }: Collapsible) => {
  return (
    <div
      className={twMerge(
        'grid transition-[grid-template-rows] duration-150 ease-out',
        isCollapsed ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]',
        className,
      )}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};
