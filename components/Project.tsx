/** @format */

import Image from 'next/image';
import IconExternal from './icons/ExternalLink';
import IconGitHub from './icons/Github';

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

const Project: React.FC<ProjectProps> = ({
  id,
  title,
  description,
  techStack,
  externalLink,
  repoLink,
  photo,
}) => {
  const idIsOdd = id % 2 !== 0;
  return (
    <div className='flex justify-between my-20'>
      {idIsOdd ? (
        <div className='flex-1 mx-2 overflow-hidden duration-700 rounded-lg cursor-pointer bg-blue-200/30 hover:bg-transparent'>
          <Image src={photo} alt='project image' className='-z-20' />
        </div>
      ) : null}
      <div
        className={`flex flex-col ${
          idIsOdd ? 'items-end' : 'items-start'
        } flex-1`}>
        <h1
          className={`mb-4 ${
            idIsOdd ? 'ml-2' : ''
          } font-mono text-lg text-blue-700`}>
          Featured Project
        </h1>

        <h2 className='text-4xl font-bold text-blue-800 cursor-pointer'>
          {`
            ${title}.
          `}
        </h2>
        <div
          className={`z-10 p-6  my-1 ${
            idIsOdd ? 'text-right pr-0' : 'text-left pl-0'
          }`}>
          {description}
        </div>
        <ul className='flex max-w-screen-sm'>
          {techStack.map((tech) => {
            const techIdIsOne = tech.id === 1;
            return (
              <li
                className={`tech-list-item ${techIdIsOne ? 'mx-0' : ''}`}
                key={tech.id}>
                {tech.name}
              </li>
            );
          })}
        </ul>
        <div className='flex'>
          <div className='project-link'>
            <a href={repoLink} target='_blank' rel='noreferrer'>
              <IconGitHub />
            </a>
          </div>
          <div className='project-link'>
            <a href={externalLink} target='_blank' rel='noreferrer'>
              <IconExternal />
            </a>
          </div>
        </div>
      </div>
      {!idIsOdd ? (
        <div className='flex-1 mx-2 overflow-hidden duration-700 rounded-lg cursor-pointer bg-blue-200/30 hover:bg-transparent'>
          <Image src={photo} alt='project image' className='-z-20' />
        </div>
      ) : null}
    </div>
  );
};

export default Project;
