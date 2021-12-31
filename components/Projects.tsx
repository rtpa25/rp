/** @format */

import Project from './Project';
import { PROJECTS } from '../config/projectData';

const Projects = () => {
  return (
    <div className='h-screen mx-5 my-60 md:mx-40'>
      <div className=''>
        <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-200 custom-h md:text-5xl'>
          Some Stuff I’ve Built
        </h2>
        <ul>
          {PROJECTS.map((project) => {
            return (
              <li key={project.id}>
                <Project
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  externalLink={project.externalLink}
                  repoLink={project.repoLink}
                  photo={project.photo}
                  id={project.id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
