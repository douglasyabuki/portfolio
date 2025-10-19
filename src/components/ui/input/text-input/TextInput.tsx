import { twMerge } from 'tailwind-merge';

interface TextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  className?: string;
  hasError?: boolean;
}

export const TextInput = ({ id, className, hasError, ...props }: TextInput) => {
  return (
    <input
      id={id}
      className={twMerge(
        'inset-shadow-weak-black bg-background-primary flex h-12 w-full rounded-md px-4 font-normal text-gray-600 placeholder-gray-400 transition-all duration-150',
        'focus:border-bg-primary focus:bg-white-primary focus:inset-shadow-strong-black focus:outline-none',
        hasError && 'border-red-600 focus:border-red-600 active:border-red-600',
        className,
      )}
      {...props}
    />
  );
};
