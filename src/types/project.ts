import type { DeviconName } from '@/libs/devicon/devicon';

export interface ProjectItem {
  name: string;
  description: {
    text: string;
    href?: string;
  };
  imageSrc: string;
  imageAlt: string;
  url: string;
  gitUrl: string;
  techs: DeviconName[];
}
