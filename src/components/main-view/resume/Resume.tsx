import { DownloadableResume } from './downloadable-resume/DownloadableResume';
import { Education } from './education/Education';

export const Resume = () => {
  return (
    <section id="resume" className="bg-section-primary section">
      <Education />
      <DownloadableResume />
    </section>
  );
};
