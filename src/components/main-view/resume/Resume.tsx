import { DownloadResume } from './download-resume/DownloadResume';
import { Education } from './education/Education';
import { Skills } from './skills/Skills';

export const Resume = () => {
  return (
    <section id="resume" className="section container-max">
      <div className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Experience & Skills</h2>
        <p className="max-w-2xl text-lg text-text-secondary">
          My academic background and the technologies I work with.
        </p>
      </div>
      <div className="flex flex-col gap-24">
        <Education />
        <Skills />
        <DownloadResume />
      </div>
    </section>
  );
};
