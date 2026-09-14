import { IconParser } from '@/components/ui/icon-parser/IconParser';
import { LogoLoop } from '@/components/ui/logo-loop/LogoLoop';
import type { ProjectItem } from '@/types/project';

export const ProjectTechs = ({ techs }: Pick<ProjectItem, 'techs'>) => (
  <div className="min-w-0 border-t border-white/10 pt-4">
    <LogoLoop
      ariaLabel="Technologies used"
      logos={techs.map((tech) => ({
        id: tech,
        title: tech,
        node: (
          <span className="flex size-8 items-center justify-center" title={tech}>
            <span className="sr-only">{tech}</span>
            <IconParser name={tech} aria-hidden="true" className="size-6" variant="original" />
          </span>
        ),
      }))}
    />
  </div>
);
