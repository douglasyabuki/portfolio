import { ResumePicker } from './resume-picker/ResumePicker';

export const DownloadableResume = () => {
  return (
    <div className="subsection" id="downloadable-resume">
      <div className="flex flex-col gap-y-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <h1 className="w-auto text-center text-3xl font-bold md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
          Downloadable Resume
        </h1>
        <h2 className="py-4 text-xl tracking-tight opacity-70 md:text-2xl lg:w-2/5 lg:py-0 2xl:text-4xl">
          Feel free to get the complete version of his Resume on PDF
        </h2>
      </div>
      <ResumePicker />
    </div>
  );
};
