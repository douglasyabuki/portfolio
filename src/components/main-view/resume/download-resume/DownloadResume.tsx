import { DynamicIcon } from '@/components/ui/dynamic-icon/DynamicIcon';
import { resumeList } from '@/data/resume';

export const DownloadResume = () => {
  return (
    <div className="subsection">
      <h1 className="text-center! text-3xl font-bold duration-150 md:text-4xl xl:text-5xl 2xl:text-6xl">
        Download Resume
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-8 py-12 md:flex-row">
        {resumeList.map((resume) => (
          <a
            key={resume.language}
            href={resume.downloadPath}
            download
            className="card-glass group relative flex w-full max-w-xs items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:shadow-xl"
          >
            <div className="flex size-12 items-center justify-center rounded-full bg-white/10 text-2xl">
              <DynamicIcon iconName={resume.FlagIconOption} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">
                {resume.language === 'PT-BR' ? 'Portuguese' : 'English'}
              </span>
              <span className="text-sm text-text-secondary">PDF Format</span>
            </div>
            <div className="absolute right-6 text-white/20 transition-colors duration-300 group-hover:text-white">
              <DynamicIcon iconName="Download" className="size-6" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
