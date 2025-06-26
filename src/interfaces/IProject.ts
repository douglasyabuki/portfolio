// Interface of items on projectList.ts
export interface IProject {
  name: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  url: string,
  gitUrl: string,
  techs: string[],
}
