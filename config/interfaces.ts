/** @format */

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  techStack: {
    id: number;
    name: string;
  }[];
  externalLink: string;
  repoLink: string;
  photo: StaticImageData;
}

export interface TechList {
  id: number;
  techName: string;
  icon: any;
  proficiency: 'awesome' | 'good' | 'learning';
}
