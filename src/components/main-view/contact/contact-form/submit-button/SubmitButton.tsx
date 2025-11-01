import { IconButton } from '@/components/ui/buttons/icon-button/IconButton';
import { Icons } from '@/icons/Icons';
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

export const SubmitButton = ({ onClick, disabled, ...props }: SubmitButtonProps) => {
  const [isEscaping, setIsEscaping] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative flex w-full justify-center overflow-hidden">
      <div>
        <IconButton
          className={twMerge(
            `bg-white-primary text-black-primary transition-transform duration-150 ease-out`,
            disabled && isEscaping ? 'md:translate-x-[200%]' : 'md:translate-x-0',
          )}
          ref={buttonRef}
          Icon={<Icons.PaperPlane />}
          onClick={onClick}
          disabled={disabled}
          onPointerEnter={(e: React.MouseEvent) => {
            if (!disabled) return;
            setIsEscaping(true);

            setTimeout(() => {
              const el = document.elementFromPoint(e.clientX, e.clientY);
              if (buttonRef.current && buttonRef.current.contains(el)) {
                setIsEscaping((prev) => !prev);
              }
            }, 150);
          }}
          {...props}
        />
      </div>
    </div>
  );
};
