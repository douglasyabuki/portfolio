// Interfaces
import { ISkill } from '../../../../../../interfaces/ISkill';

// Props destructuring
interface Props {
  projectName: string;
  projectDescription: string;
  isExtended: boolean;
  technologies: ISkill[];
}

// Card main frame main function
export default function CardMainFrame({
  projectName,
  projectDescription,
  isExtended,
  technologies,
}: Props) {
  // Returns the title, description and technologies to ProjectCard.tsx
  return (
    <div
      className={`${
        isExtended ? `min-w-[30vw] lg:py-12 xl:py-16` : `py-3 lg:w-72 2xl:w-96`
      } flex-col space-y-8 text-center align-middle xl:space-y-12`}
    >
      <div className="block space-y-8">
        <h2 className="mb-2 text-xl font-bold xs:text-2xl md:text-4xl lg:text-2xl xl:mb-4 xl:text-3xl 2xl:text-4xl">
          {projectName}
        </h2>
        <div className="flex h-5 w-auto justify-center gap-2 lg:h-6 lg:gap-3 2xl:h-9">
          {technologies.map((filteredSkill) => (
            <a href={filteredSkill.skillUrl} key={filteredSkill.skillName}>
              {filteredSkill.skillImg ? (
                <img
                  className="cover h-5 w-5 translate-y-1 opacity-80 hover:opacity-100 lg:h-6 lg:w-6 2xl:h-9 2xl:w-9"
                  src={filteredSkill.skillImg}
                  alt={filteredSkill.skillImgAlt}
                ></img>
              ) : (
                <i
                  className={`${filteredSkill.skillIcon} text-xl opacity-80 hover:opacity-100 lg:text-2xl 2xl:text-4xl`}
                ></i>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="flex h-full w-full justify-center opacity-60 lg:px-4 xl:py-3">
        <h3 className="xs:text-lg md:text-xl lg:max-w-[400px] lg:text-lg xl:text-xl 2xl:text-3xl">
          {projectDescription}
        </h3>
      </div>
    </div>
  );
}
