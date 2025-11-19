import { TextSpawnAnchorButton } from '@/components/ui/buttons/text-spawn-anchor-button/TextSpawnAnchorButton';
import { Divider } from '@/components/ui/divider/Divider';
import { IconParser } from '@/components/ui/icon-parser/IconParser';
import { Icons } from '@/icons/Icons';
import techMapping from '@/libs/devicon/tech-mapping.json';
import type { ProjectItem } from '@/types/project';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const ProjectCard = ({
  description,
  gitUrl,
  imageAlt,
  imageSrc,
  name,
  techs,
  url,
}: ProjectItem) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div
      className={twMerge(
        'group/project-card bg-background-primary relative items-center justify-start rounded-xl text-center shadow-md shadow-black/10 duration-150',
        isToggled
          ? 'xs:px-6 flex w-full max-w-[120rem] flex-col gap-8 px-4 py-12 shadow-lg sm:px-10 lg:grid lg:grid-cols-2 lg:px-16 lg:py-12'
          : 'flex w-[18.75rem] flex-col gap-4 p-4 hover:shadow-lg sm:w-[21.875rem] sm:p-7 sm:odd:-translate-x-20 sm:even:translate-x-20 md:w-[25rem] md:p-8 md:odd:-translate-x-40 md:even:translate-x-40 lg:p-4 xl:p-8',
      )}
    >
      <button
        className={twMerge(
          'bg-black-primary absolute top-4 right-4 z-10 size-10 cursor-pointer items-center justify-center rounded-full p-2 duration-150',
          isToggled ? 'hover:p-[0.625rem]' : 'hover:p-[0.375rem]',
        )}
        onClick={() => setIsToggled(!isToggled)}
      >
        {isToggled ? <Icons.Shrink /> : <Icons.Expand />}
      </button>
      <div
        className={twMerge(
          'flex w-full flex-col items-center justify-start gap-4',
          isToggled ? 'h-full' : 'min-h-[18.75rem]',
        )}
      >
        <div className="relative flex w-full flex-col items-center gap-2">
          <h3
            className={twMerge(
              'text-xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl',
              isToggled ? '' : 'line-clamp-1 px-8 text-ellipsis',
            )}
          >
            {name}
          </h3>
          <div className={twMerge('flex items-center justify-center gap-2', isToggled && 'gap-4')}>
            {techs.map((tech) => (
              <a
                className="duration-150 hover:animate-pulse"
                key={`project-${name}-${tech}`}
                href={techMapping[tech].url}
                onContextMenu={(e) => e.preventDefault()}
                target="_blank"
              >
                <IconParser name={tech} className="size-6" variant="original" />
              </a>
            ))}
          </div>
        </div>
        <Divider />
        <span className="flex h-auto flex-1 items-center self-stretch">
          <p
            className={twMerge(
              'mx-auto w-fit tracking-tighter text-pretty opacity-50 md:text-xl lg:text-lg xl:text-xl',
              isToggled ? '' : 'line-clamp-4 text-ellipsis',
            )}
          >
            {description}
          </p>
        </span>
        <Divider className={twMerge(isToggled ? 'lg:flex' : 'hidden')} />
        <div className={twMerge('hidden', isToggled && 'gap-8 lg:flex')}>
          <TextSpawnAnchorButton Icon={<Icons.Github />} text="Go to Repository" href={gitUrl} />
          <TextSpawnAnchorButton Icon={<Icons.Chain />} text="Go to Project" href={url} />
        </div>
      </div>
      <div
        className={twMerge(
          'shaped-ruppee flex h-0 w-0 items-center justify-center',
          isToggled && 'h-fit w-fit',
        )}
      >
        <img src={imageSrc} alt={imageAlt} className="contain w-auto" />
      </div>
      <Divider className={twMerge(isToggled ? 'flex lg:hidden' : 'hidden')} />
      <div className={twMerge('hidden', isToggled && 'xs:gap-8 flex gap-4 md:gap-12 lg:hidden')}>
        <TextSpawnAnchorButton Icon={<Icons.Github />} text="Go to Repository" href={gitUrl} />
        <TextSpawnAnchorButton Icon={<Icons.Chain />} text="Go to Project" href={url} />
      </div>
    </div>
  );
};
