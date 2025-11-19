import { DynamicIcon } from '@/components/ui/dynamic-icon/DynamicIcon';
import { type IconOption } from '@/icons/Icons';
import type { EducationInstitution, EducationStatus } from '@/types/education';
import { scrollToId } from '@/utils/dom-utils';
import { twMerge } from 'tailwind-merge';

interface EducationCard {
  title: EducationInstitution;
  status: EducationStatus;
  content: string;
  iconName: IconOption;
  href?: string;
}

export const EducationCard = ({ content, iconName, status, title, href }: EducationCard) => {
  return (
    <div
      className={twMerge(
        'bg-background-primary group/card text-white-primary flex h-auto max-h-[10.625rem] min-h-[8.75rem] min-w-fit scale-95 items-start justify-start gap-2 rounded-xl p-4 shadow-md shadow-black/10 duration-150 lg:origin-left',
        'sm:gap-4 sm:even:translate-x-10',
        'lg:min-h-[6.875rem]',
        'xl:p-4',
        '2xl:min-h-[10.3125rem]',
        'hover:scale-100 hover:shadow-lg',
      )}
    >
      <span
        className={twMerge(
          'flex size-6 items-center justify-center duration-150 md:size-8 lg:size-6 xl:size-8',
          iconName === 'GraduationCap'
            ? 'group-hover/card:animate-bounce'
            : 'group-hover/card:animate-spin',
        )}
      >
        <DynamicIcon iconName={iconName} />
      </span>
      <div className="flex h-auto flex-1 flex-col justify-center gap-2 self-stretch xl:gap-4">
        <span className="flex items-baseline gap-4 text-nowrap">
          <h2 className="2xl:text-4x text-xl font-bold duration-150 md:text-2xl xl:text-3xl">
            {title}
          </h2>
          <h3 className="text-lg opacity-80 duration-150 md:text-xl xl:text-2xl">{status}</h3>
        </span>
        {href ? (
          <p className="tracking-tight xl:text-lg 2xl:text-2xl">
            Check it out in{' '}
            <a
              href={href}
              className="underline duration-150 focus:font-semibold focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                scrollToId(href);
              }}
              onContextMenu={(e) => e.preventDefault()}
            >
              {content}
            </a>
          </p>
        ) : (
          <p className="tracking-tight xl:text-lg 2xl:text-2xl">{content}</p>
        )}
      </div>
    </div>
  );
};
