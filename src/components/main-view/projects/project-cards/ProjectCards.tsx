import { projectList } from '@/data/projects';
import { ProjectCard } from './project-card/ProjectCard';

export const ProjectCards = () => {
  return (
    <div id="project-cards" className="subsection gap-20">
      <div className="flex flex-col gap-y-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <h1 className="w-auto text-center text-3xl font-bold md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
          Projects
        </h1>
        <h2 className="py-4 text-xl tracking-tight opacity-70 md:text-2xl lg:w-2/5 lg:py-0 2xl:text-4xl">
          Take a quick look at some of his projects. Github and website available to each one of
          these.
        </h2>
      </div>
      <div className="mx-auto flex max-w-[120rem] flex-col items-center gap-12">
        {projectList.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
