import { ZoomOutButton } from '@/components/ui/buttons/zoom-out-button/ZoomOutButton';
import { resumeList } from '@/data/resume';
import { Icons } from '@/icons/Icons';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const ResumePicker = () => {
  const [resumeLanguage, setResumeLanguage] = useState<string>(resumeList[0].language);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 py-20 text-center lg:py-32">
      <h1 className="mb-2 text-center text-xl font-bold md:text-2xl xl:mb-4 xl:text-3xl 2xl:text-4xl">
        Choose the Resume language
      </h1>
      <div className="flex w-full items-center justify-center gap-16">
        {resumeList.map(({ language, FlagIconOption }) => (
          <ZoomOutButton
            key={`${language}-resume-button`}
            isToggled={resumeLanguage === language}
            iconName={FlagIconOption}
            onClick={() => setResumeLanguage(language)}
            description={language}
          />
        ))}
      </div>
      <div className="align-center relative m-auto flex h-32 w-fit items-center justify-center gap-8 rounded-xl">
        {resumeList.map(({ language, downloadPath, pdfIconClassName, pdfContainerClassName }) => (
          <div
            key={`${language}-pdf-hole`}
            className={twMerge(
              'flex h-32 w-32 items-center justify-center rounded-xl transition-all duration-300 hover:translate-y-[0.0625rem] has-focus:translate-y-[0.0625rem]',
              pdfContainerClassName,
            )}
          >
            <a
              href={downloadPath}
              download
              className={twMerge(
                'size-16 text-gray-400 transition-colors duration-500 focus:outline-none',
                resumeLanguage === language && pdfIconClassName,
              )}
              onContextMenu={(e) => e.preventDefault()}
              tabIndex={resumeLanguage === language ? 0 : -1}
            >
              <Icons.Pdf />
            </a>
          </div>
        ))}
        <div
          className={twMerge(
            'bg-black-primary absolute h-32 w-32 rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl',
            resumeLanguage === 'PT-BR'
              ? 'right-0 shadow-red-500/20'
              : 'right-40 shadow-green-500/20',
          )}
        />
      </div>
    </div>
  );
};
