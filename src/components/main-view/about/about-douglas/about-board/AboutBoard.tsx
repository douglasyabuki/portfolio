import { ExpandButton } from '@/components/ui/buttons/expand-button/ExpandButton';
import { Divider } from '@/components/ui/divider/Divider';
import { GridImage } from '@/components/ui/img/grid-image/GridImage';
import { TextReveal } from '@/components/ui/text-reveal/TextReveal';
import { aboutList } from '@/utils/about-list';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const AboutBoard = () => {
  const [selectedSectionId, setSelectedSectionId] = useState(0);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 py-20 text-center lg:py-32">
      <div
        className={twMerge(
          'bg-container-secondary 3xl:gap-32 border-black-primary relative z-[4] flex w-full max-w-[81.25rem] flex-col gap-4 rounded-2xl border-[1px] px-4 py-8 shadow-lg shadow-black/10 sm:px-12 sm:py-7 md:px-20 md:py-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-10 lg:py-10 xl:px-16',
        )}
      >
        <div className="flex h-full flex-col items-center justify-start gap-2 text-center lg:gap-4 xl:gap-6">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-5xl">
            {aboutList[selectedSectionId].title}
          </h3>
          <Divider />
          <TextReveal
            text={aboutList[selectedSectionId].content}
            interval={5}
            caretOptions={{ display: 'while-typing' }}
            className="h-auto flex-1 text-center text-base leading-snug tracking-tighter text-pretty opacity-80 md:text-lg lg:text-base xl:text-xl"
            reserveSpace
          />
          <Divider />
          <div className="bg-background-primary hidden w-auto min-w-full justify-center gap-4 self-center rounded-lg px-4 py-2 duration-150 lg:flex">
            {aboutList.map(({ iconName, title }, sectionId) => (
              <ExpandButton
                key={`about-douglas-${title.toLowerCase()}`}
                label={title}
                iconName={iconName}
                className={selectedSectionId === sectionId ? 'animate-bounce text-green-600' : ''}
                onClick={() => setSelectedSectionId(sectionId)}
              />
            ))}
          </div>
        </div>
        <GridImage
          className="aspect-square max-h-[37.5rem] max-w-[37.5rem] md:aspect-auto md:h-[27rem] md:w-[27rem] md:self-center lg:aspect-square lg:h-auto lg:w-auto"
          src={aboutList[selectedSectionId].imgHref}
          alt={aboutList[selectedSectionId].imgAlt}
        />
        <div className="from-black-primary absolute bottom-8 z-10 flex justify-center gap-4 self-center rounded-lg bg-gradient-to-b to-transparent px-4 py-2 shadow-lg shadow-black/10 backdrop-blur-md duration-150 md:bottom-24 lg:hidden">
          {aboutList.map(({ iconName, title }, sectionId) => (
            <ExpandButton
              key={`about-douglas-${title.toLowerCase()}`}
              label={title}
              iconName={iconName}
              className={selectedSectionId === sectionId ? 'animate-bounce text-green-600' : ''}
              onClick={() => setSelectedSectionId(sectionId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
