// Interfaces
import { IResume } from '../../../../../../interfaces/IResume';

// Hooks
import { useEffect, useState } from 'react';

// Props destructuring
export interface Props {
  item: IResume;
  currentLanguage: number;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<number>>;
}

// Flag button main function
export default function FlagButton({ item, currentLanguage, setCurrentLanguage }: Props) {
  // Setting initial state
  const [isActive, setIsActive] = useState<boolean>(item.id === currentLanguage ? true : false);

  // Changes the current language onClick
  const onClickHandler = () => {
    setCurrentLanguage(item.id);
  };

  // Triggers a state verification and update based on current language set by user
  useEffect(() => {
    currentLanguage === item.id ? setIsActive(true) : setIsActive(false);
  }, [currentLanguage]);

  // Returns flag buttons to ResumeChooser.tsx
  return (
    <div
      role={'button'}
      onClick={onClickHandler}
      className={`${
        isActive ? 'shadow-outer' : 'shadow-md shadow-black/10'
      } flex h-20 w-auto items-center justify-center gap-2 rounded-xl p-2 transition-all duration-300 hover:shadow-outer-hover`}
    >
      <img
        className={`cover h-12 w-12 rounded-full transition-all duration-300`}
        src={item.img}
        alt={item.imgAlt}
      />
      <h1
        className={`${
          isActive ? 'opacity-100' : 'opacity-40'
        } w-fit text-center text-lg font-bold opacity-80 md:text-xl xl:text-2xl`}
      >
        {item.language}
      </h1>
    </div>
  );
}
