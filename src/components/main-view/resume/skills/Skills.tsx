// Components
import SkillCard from './skill-card/SkillCard';

// Interface
import { ISkill } from '../../../../interfaces/ISkill';

// Props destructuring
interface Props {
  list: ISkill[];
}

// Skills (Tech stack) main function
export default function Skills({ list }: Props) {
  // Separating the received list based on property value
  const learnt = list.filter((element) => element.learning === false);

  // Returns the rendered Skills (Tech stack) to Resume.tsx
  return (
    <div className="w-auto space-y-12 px-4 py-20 text-center sm:px-7 md:px-8 lg:px-10">
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">Tech Stack</h1>
      <div className="m-auto grid w-fit grid-cols-3 gap-3 md:gap-5">
        {learnt.map((item) => (
          <SkillCard item={item} key={item.skillName}></SkillCard>
        ))}
      </div>
    </div>
  );
}
