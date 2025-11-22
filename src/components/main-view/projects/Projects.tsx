import { GithubLink } from './github-link/GithubLink';
import { ProjectCards } from './project-cards/ProjectCards';

export const Projects = () => {
  return (
    <section id="projects" className="section container-max">
      <div className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Projects</h2>
        <p className="text-text-secondary max-w-2xl text-lg">
          A collection of projects I've worked on, ranging from web applications to experimental
          demos.
        </p>
      </div>
      <ProjectCards />
      <GithubLink />
    </section>
  );
};
