// Interfaces
import { IProject } from '../../../../../interfaces/IProject';

// Components
import CardImageFrame from './card-image-frame/CardImageFrame';
import CardLinksFrame from './card-links-frame/CardLinksFrame';
import CardMainFrame from './card-main-frame/CardMainFrame';

// Const
import { skillList } from '../../../resume/skills/skill-list/skill-list';

// Hooks
import { useState } from 'react';

// Props destructuring
interface Props {
  item: IProject;
  id: number;
}

// Project Card main function
export default function ProjectCard({ item, id }: Props) {
  // Setting initial state to extensible card
  const [isExtended, setIsExtended] = useState<boolean>(false);

  // Conditional styling based on id being even or odd to avoid nesting ternary operations
  let backgroundChoose = id % 2 === 0 ? `custom-bg-1` : `custom-bg-2`;
  let shouldTranslate = id % 2 === 0 ? `lg:-translate-x-20` : `lg:translate-x-20`;
  let translateAndBackground = isExtended
    ? `cursor-default hover:shadow-outer ${backgroundChoose}`
    : `bg-background-div1 hover:-translate-y-5 hover:shadow-lg hover:shadow-translucid-black ${shouldTranslate}`;

  // Creating a new list of ISkill interface containing only techs used in the specific project
  const filteredSkills = skillList.filter((skill) => item.techs.includes(skill.skillName));

  // Changing state on click
  const onClickHandler = () => {
    setIsExtended(!isExtended);
  };

  // Returns a single card to be rendered by ProjectCards.tsx
  return (
    <div
      role={'button'}
      onClick={onClickHandler}
      className={`${translateAndBackground} group container block h-auto w-auto transform space-y-8 rounded-xl  p-4 py-12 shadow-md shadow-translucid-black transition-all duration-300  xs:p-6 xs:py-16 md:rounded-3xl md:p-12 lg:m-auto lg:flex lg:min-h-[350px] lg:w-fit lg:space-y-0 lg:p-8 xl:p-12`}
    >
      <CardMainFrame
        isExtended={isExtended}
        projectName={item.name}
        projectDescription={item.description}
        technologies={filteredSkills}
      ></CardMainFrame>
      <CardImageFrame
        isExtended={isExtended}
        src={item.imageSrc}
        alt={item.imageAlt}
      ></CardImageFrame>
      <CardLinksFrame
        isExtended={isExtended}
        gitUrl={item.gitUrl}
        projectUrl={item.url}
      ></CardLinksFrame>
    </div>
  );
}
