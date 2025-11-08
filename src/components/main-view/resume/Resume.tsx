import { DownloadableResume } from './downloadable-resume/DownloadableResume';
import { Education } from './education/Education';
import { Skills } from './skills/Skills';

export const Resume = () => {
  return (
    <section id="resume" className="bg-section-primary section">
      <Education />
      <Skills />
      <DownloadableResume />
    </section>
  );
};
