// Components
import MenuButton from './menu-button/MenuButton';

// Interface
import { INavigation } from '../../../interfaces/INavigation';

// Hooks
import React, { useRef, useState } from 'react';

// Utils
import { scrollOnClick } from '../../../utils/scroll-on-click';

// Props destructuring
interface Props {
  list: INavigation[];
}

// Navigation (routing links) main function
export default function HeaderNavigation({ list }: Props) {
  // Declaring and setting initial value to hidden links state
  const [isActive, setIsActive] = useState<boolean>(false);
  const timeout = useRef<number>(null);

  // Function to show or hide the links menu
  const onClickHandler = () => {
    setIsActive(!isActive);
  };

  // Function to trigger a timeout to hide menu onMouseLeave
  const onMouseLeaveHandler = () => {
    timeout.current = setTimeout(() => {
      setIsActive(false);
    }, 500);
  };

  // Function to clear timeout onMouseEnter before menu hides
  const onMouseEnterHandler = () => {
    clearTimeout(timeout.current);
  };

  // Maps the list of links into ready-to-render items
  const mappedLinks = list.map((item) => (
    <li
      className="relative mx-auto flex h-max w-24 columns-2 items-center justify-center gap-2 opacity-50 hover:underline hover:opacity-80"
      key={item.id}
    >
      <i className={`${item.icon} absolute left-0`}></i>
      <a href={item.link} onClick={() => scrollOnClick(item.link)}>{item.name}</a>
    </li>
  ));

  // Returns the Navigation menu to Header.tsx
  return (
    <div className="container relative my-auto h-auto w-auto justify-self-end align-middle font-header">
      <ul
        onMouseLeave={onMouseLeaveHandler}
        onMouseEnter={onMouseEnterHandler}
        className={`relative block lg:flex`}
      >
        {isActive ? (
          <div className="container absolute right-5 top-16 h-auto w-56 space-y-6 bg-background-black py-10 opacity-95 backdrop-blur-md">
            {mappedLinks}
          </div>
        ) : (
          <div className="container hidden lg:flex">{mappedLinks}</div>
        )}
      </ul>
      <MenuButton onClickHandler={onClickHandler}></MenuButton>
    </div>
  );
}
