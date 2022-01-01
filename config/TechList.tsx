/** @format */

import { TechList } from './interfaces';
import reactIcon from '../public/react.svg';
import nextIcon from '../public/next.svg';
import tailwindIcon from '../public/tailwind.svg';
import reduxIcon from '../public/redux.svg';
import graphqlIcon from '../public/graphql.svg';
import expressIcon from '../public/express.svg';
import postgreIcon from '../public/postgre.svg';
import mongoIcon from '../public/mongo.svg';
import typescriptIcom from '../public/typescript.svg';

export const FrontendTech: TechList[] = [
  {
    id: 1,
    techName: 'ReactJS',
    icon: reactIcon,
    proficiency: 'awesome',
  },
  {
    id: 2,
    techName: 'NextJS',
    icon: nextIcon,
    proficiency: 'good',
  },
  {
    id: 3,
    techName: 'TailwindCSS',
    icon: tailwindIcon,
    proficiency: 'awesome',
  },
  {
    id: 4,
    techName: 'Redux-Toolkit',
    icon: reduxIcon,
    proficiency: 'good',
  },
  {
    id: 5,
    techName: 'Typescript',
    icon: typescriptIcom,
    proficiency: 'awesome',
  },
];

export const BackendTech: TechList[] = [
  {
    id: 1,
    techName: 'GraphQL',
    icon: graphqlIcon,
    proficiency: 'awesome',
  },
  {
    id: 2,
    techName: 'RestAPI',
    icon: expressIcon,
    proficiency: 'good',
  },
  {
    id: 3,
    techName: 'PostgreSQL',
    icon: postgreIcon,
    proficiency: 'awesome',
  },
  {
    id: 4,
    techName: 'MongoDB',
    icon: mongoIcon,
    proficiency: 'good',
  },
  {
    id: 5,
    techName: 'Typescript',
    icon: typescriptIcom,
    proficiency: 'awesome',
  },
];
