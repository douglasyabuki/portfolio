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
        'inset-shadow-weak-black bg-white/5 border border-white/10 flex h-12 w-full rounded-md px-4 font-normal text-white placeholder-gray-400 transition-all duration-150',
        'focus:border-white focus:bg-white/10 focus:inset-shadow-strong-black focus:outline-none',
        hasError && 'border-red-600 focus:border-red-600 active:border-red-600',
        className,
      )}
      {...props}
    />
  );
};
