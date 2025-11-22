import { Icons } from '@/icons/Icons';
import { twMerge } from 'tailwind-merge';

interface Label extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  className?: string;
  children: React.ReactElement<{ id?: string; hasError?: boolean }>;
  error?: string;
}

export const Label = ({ label, className, error = 'Error message', children, ...props }: Label) => {
  const id = children.props.id;
  const hasError = children.props.hasError;

  return (
    <label
      htmlFor={id}
      className={twMerge(
        'group peer focus-within:text-white-primary text-white-primary flex flex-col items-start justify-start gap-2 text-sm font-bold transition-all duration-150',
        hasError && 'text-red-600 focus-within:text-red-600',
        className,
      )}
      {...props}
    >
      <span className="flex items-center justify-start gap-2">
        {label}
        {hasError && (
          <span className="flex h-fit gap-1 text-xs text-gray-400 normal-case">
            <Icons.Warning className="clay-icon size-4 p-0.5 text-red-600" />
            {error}
          </span>
        )}
      </span>
      {children}
    </label>
  );
};
