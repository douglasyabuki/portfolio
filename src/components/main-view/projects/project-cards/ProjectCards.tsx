import { projectList } from '@/data/projects';
import { ProjectCard } from './project-card/ProjectCard';

export const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projectList.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
};
