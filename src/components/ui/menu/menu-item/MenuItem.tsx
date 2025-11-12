import { twMerge } from 'tailwind-merge';

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  isSelected?: boolean;
  isDisabled?: boolean;
  href?: string;
}

export const MenuItem = ({
  className,
  children,
  onClick,
  isDisabled = false,
  isSelected = false,
  href,
  ...props
}: MenuItemProps) => {
  const isString = typeof children === 'string';
  const Tag = href ? 'a' : 'div';

  return (
    <Tag
      {...(href ? { href } : {})}
      className={twMerge(
        'box-border flex h-10 w-fit cursor-pointer items-center justify-center gap-2 bg-none px-4 py-2 text-sm text-nowrap disabled:cursor-default',
        isSelected ? 'bg-gray-100' : '',
        isDisabled ? 'cursor-not-allowed opacity-50' : '',
        className,
      )}
      onClick={(e) => {
        if (isDisabled) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      }}
      role="menuitem"
      tabIndex={0}
      {...props}
    >
      {isString ? <p className="overflow-hidden text-ellipsis">{children}</p> : children}
    </Tag>
  );
};
