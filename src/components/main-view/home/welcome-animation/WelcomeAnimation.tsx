import { TextReveal } from '@/components/ui/text-reveal/TextReveal';
import { Icons } from '@/icons/Icons';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const WelcomeAnimation = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div
      className={twMerge(
        'bg-black-primary relative flex h-12 w-auto max-w-fit items-center justify-center overflow-hidden rounded-full p-2 duration-150 lg:h-16',
        isToggled && 'px-4',
      )}
      onClick={() => setIsToggled(!isToggled)}
    >
      {isToggled && (
        <TextReveal
          text="Welcome"
          interval={50}
          caretOptions={{ display: 'while-typing' }}
          className="text-lg font-bold select-none xl:text-xl"
        />
      )}
      <span className="size-8 animate-bounce lg:size-12">
        <Icons.Exclamation />
      </span>
    </div>
  );
};
