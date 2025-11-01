import { GithubLink } from './github-link/GithubLink';
import { ProjectCards } from './project-cards/ProjectCards';

export const Projects = () => {
  return (
    <section id="projects" className="bg-section-secondary section">
      <ProjectCards />
      <GithubLink />
    </section>
  );
};
