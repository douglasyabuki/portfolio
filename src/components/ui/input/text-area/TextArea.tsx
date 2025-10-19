import { twMerge } from 'tailwind-merge';

interface TextArea extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
  hasError?: boolean;
}

export const TextArea = ({ id, className, value, hasError, ...props }: TextArea) => {
  return (
    <textarea
      id={id}
      className={twMerge(
        'inset-shadow-weak-black bg-background-primary xs:min-h-[220px] text-white-primary focus:text-black-primary flex h-auto min-h-[200px] w-full resize-none rounded-md px-4 py-4 font-normal placeholder-gray-400 transition-all duration-150',
        'focus:border-bg-primary focus:bg-white-primary focus:inset-shadow-strong-black focus:outline-none',
        hasError && 'border-red-600 focus:border-red-600 active:border-red-600',
        className,
      )}
      value={value}
      {...props}
    />
  );
};
