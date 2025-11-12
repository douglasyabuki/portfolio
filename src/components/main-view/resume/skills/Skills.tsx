import type { DeviconName } from '@/libs/devicon/devicon';
import techMappings from '@/libs/devicon/tech-mapping.json';
import { skillList } from '@/utils/skill-list';
import { SkillCard } from './skill-card/SkillCard';

const learnedSkills: DeviconName[] = [];
const learningSkills: DeviconName[] = [];

skillList.forEach(({ name, learning }) =>
  learning ? learningSkills.push(name) : learnedSkills.push(name),
);

export const Skills = () => {
  return (
    <div className="subsection gap-20">
      <h1 className="text-center! text-3xl font-bold duration-150 md:text-4xl xl:text-5xl 2xl:text-6xl">
        Skills
      </h1>
      <div className="m-auto grid w-fit grid-cols-3 gap-3 md:gap-5">
        {learnedSkills.map((name) => (
          <SkillCard
            key={`skill-card-${name}`}
            href={techMappings[name].url}
            iconName={name}
            skillName={techMappings[name].name}
          />
        ))}
      </div>
    </div>
  );
};
