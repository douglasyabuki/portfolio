import { Children, forwardRef, isValidElement } from 'react';
import { twMerge } from 'tailwind-merge';

type WrapperElement = HTMLDivElement | HTMLUListElement;

interface MenuRoot extends React.HTMLAttributes<WrapperElement> {
  className?: string;
  children: React.ReactNode;
}

export const MenuRoot = forwardRef<WrapperElement, MenuRoot>(
  ({ className, children, ...props }, ref) => {
    const childArray = Children.toArray(children);

    const isListItem = childArray.every(
      (child) =>
        isValidElement(child) &&
        typeof child.type === 'string' &&
        child.type.toLowerCase() === 'li',
    );

    const Wrapper = isListItem ? 'ul' : 'div';
    return (
      <Wrapper
        role="menu"
        className={twMerge('flex flex-col', className)}
        ref={ref as React.Ref<HTMLDivElement & HTMLUListElement>}
        {...props}
      >
        {children}
      </Wrapper>
    );
  },
);
