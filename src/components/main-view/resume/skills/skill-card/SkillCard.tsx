import { IconParser } from '@/components/ui/icon-parser/IconParser';
import type { DeviconName } from '@/libs/devicon/devicon';
import { twMerge } from 'tailwind-merge';

interface SkillCard {
  href: string;
  iconName: DeviconName;
  skillName: string;
}

export const SkillCard = ({ href, iconName, skillName }: SkillCard) => {
  return (
    <a
      href={href}
      target="_blank"
      className="glass-panel xs:size-24 group/skill-card relative flex size-20 flex-col items-center justify-center rounded-xl shadow-md shadow-black/10 duration-150 select-none hover:shadow-lg focus:shadow-lg active:scale-95 md:size-40"
      onContextMenu={(e) => e.preventDefault()}
    >
      <IconParser
        name={iconName}
        variant="original"
        className={twMerge(
          'clay-icon text-white-primary xs:size-12 z-[4] size-10 origin-center duration-150 md:size-20',
          'group-hover/skill-card:-translate-y-[20%] group-hover/skill-card:scale-75',
          'group-focus/skill-card:-translate-y-[20%] group-focus/skill-card:scale-75',
        )}
      />
      <span
        className={twMerge(
          'text-white-primary/20 xs:text-md text-xxs absolute z-[3] flex translate-y-4 scale-50 font-bold opacity-0 transition-all duration-150 md:text-lg',
          'group-hover/skill-card:text-white-primary xs:group-hover/skill-card:translate-y-6 group-hover/skill-card:translate-y-5 group-hover/skill-card:scale-100 group-hover/skill-card:opacity-100 md:group-hover/skill-card:translate-y-10',
          'group-focus/skill-card:text-white-primary xs:group-focus/skill-card:translate-y-6 group-focus/skill-card:translate-y-5 group-focus/skill-card:scale-100 group-focus/skill-card:opacity-100 md:group-focus/skill-card:translate-y-10',
        )}
      >
        {skillName}
      </span>
    </a>
  );
};
