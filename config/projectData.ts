/** @format */

import EtherPhoto from '../public/ether.png';
import EcommPhoto from '../public/ecomm.png';
import MedicoPhoto from '../public/medico.png';
import CodePlayPhoto from '../public/codeplay.png';

import { ProjectProps } from '../components/Project';

export const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    title: 'Ether',
    description: `
    Ether is a miniature Full stack clone of Redit, 
    for my friends at my university to share their 
    opinions and get voted accordly, Some of the key features
    that I am proud of are cursor pagination, global storage with apollo cache 
    and a robust auth system with forget password and cookie management
    `,
    techStack: [
      {
        id: 1,
        name: 'Nextjs',
      },
      {
        id: 2,
        name: 'Typescript',
      },
      {
        id: 3,
        name: 'Chakra-UI',
      },
      {
        id: 4,
        name: 'GraphQL',
      },
      {
        id: 5,
        name: 'Prisma',
      },
      {
        id: 6,
        name: 'PostgreSQL',
      },
      {
        id: 7,
        name: 'Redis',
      },
    ],
    externalLink: 'https://etherapp.social',
    repoLink: 'https://github.com/rtpa25/le-redit-web',
    photo: EtherPhoto,
  },
  {
    id: 2,
    title: 'Ecomm',
    description: `
    A minimal full stack Ecommerce web application built with React, Express, mongoose, With a built in admin pannel integrated with stripe payments. Built with typescript and used Tailwind CSS and styled components to styled. Deployed on Heroku(backend) and Vercel(frontend)
    `,
    techStack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Express',
      },
      {
        id: 3,
        name: 'Mongoose',
      },
      {
        id: 4,
        name: 'MongoDB',
      },
      {
        id: 5,
        name: 'Typescript',
      },
      {
        id: 6,
        name: 'Tailwind',
      },
      {
        id: 7,
        name: 'Rest-API',
      },
    ],
    externalLink: 'https://portfolio-1-frontend.vercel.app/',
    repoLink: 'https://github.com/rtpa25/p-1',
    photo: EcommPhoto,
  },
  {
    id: 3,
    title: 'Medico',
    description: `
    A medical Themed chat app for the doctors to communicated with their teams inside their respective divisons. Built with React, TypeScript and Stream chat API. Deployed on Heroku(backend) and Vercel(frontend)
    `,
    techStack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Stream-Chat',
      },
      {
        id: 3,
        name: 'Express',
      },
      {
        id: 4,
        name: 'Typescript',
      },
    ],
    externalLink: 'https://etherapp.social',
    repoLink: 'https://github.com/rtpa25/le-redit-web',
    photo: MedicoPhoto,
  },
  {
    id: 4,
    title: 'CodePlay',
    description: `
    An online code and markdown playground where you can write react or pure web code and write docs for the same. Install any npm pacakage by just writting the import statement. The code transpiles and bundles in the browser making the code execution rediculusoly fast. The code-compilation logic in the browser is taken from Stephen Grinder's course project, Is built with React, Express, Mongoose, Typescript, TailwindCSS and Esbuild to compile the code and monaco editor to bring the editor to the web.
    `,
    techStack: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Typescript',
      },
      {
        id: 3,
        name: 'Express',
      },
      {
        id: 4,
        name: 'EsBuild',
      },
      {
        id: 5,
        name: 'Monaco',
      },
      {
        id: 6,
        name: 'Mongoose',
      },
      {
        id: 7,
        name: 'Rest-API',
      },
    ],
    externalLink: 'https://etherapp.social',
    repoLink: 'https://github.com/rtpa25/le-redit-web',
    photo: CodePlayPhoto,
  },
];
