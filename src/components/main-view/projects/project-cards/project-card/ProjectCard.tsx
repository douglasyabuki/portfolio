import { IconParser } from '@/components/ui/icon-parser/IconParser';
import { Icons } from '@/icons/Icons';
import type { ProjectItem } from '@/types/project';

import { GridImage } from '@/components/ui/img/grid-image/GridImage';
import { Portal } from '@/components/ui/portal/Portal';
import { useState } from 'react';

export const ProjectCard = ({
  description,
  gitUrl,
  name,
  techs,
  url,
  imageSrc,
  imageAlt,
}: ProjectItem) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group glass-panel relative flex flex-col rounded-xl p-6 transition-all hover:border-white/20 hover:bg-white/10">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icons.Folder className="text-text-secondary h-9 w-9" />
            <h3 className="font-semibold text-white">{name}</h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-text-secondary transition-colors hover:text-white"
              title="View Image"
            >
              <Icons.Search className="clay-icon h-9 w-9" />
            </button>
            {gitUrl && (
              <a
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors hover:text-white"
                title="View Source"
              >
                <Icons.Github className="clay-icon h-9 w-9" />
              </a>
            )}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors hover:text-white"
                title="Visit Website"
              >
                <Icons.Chain className="clay-icon h-9 w-9" />
              </a>
            )}
          </div>
        </div>

        <p className="text-text-secondary mb-6 flex-1 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techs.slice(0, 5).map((tech) => (
            <div key={tech} className="text-text-secondary" title={tech}>
              <IconParser
                name={tech}
                className="clay-icon h-8 w-8 opacity-60 transition-opacity group-hover:opacity-100"
                variant="original"
              />
            </div>
          ))}
        </div>
      </div>

      <Portal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        backdrop
        className="z-[60]"
      >
        <div
          className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center justify-center outline-none"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute -top-12 right-0 z-50 text-white transition-colors hover:text-gray-300 md:top-0 md:-right-12"
            title="Close"
          >
            <Icons.X className="h-8 w-8" />
          </button>
          <GridImage
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
            rows={6}
            cols={6}
          />
        </div>
      </Portal>
    </>
  );
};
