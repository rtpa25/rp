/** @format */

import dynamic from 'next/dynamic';
import { RoughNotation } from 'react-rough-notation';
import IconGitHub from './icons/Github';
import IconLinkedin from './icons/Linkedin';
import IconTwitter from './icons/Twitter';

const Footer = () => {
  return (
    <div className='text-center flex items-center justify-center flex-col'>
      <ul className='flex md:hidden'>
        <li>
          <div className='socials-link'>
            <a href={''} target='_blank' rel='noreferrer'>
              <IconGitHub />
            </a>
          </div>
        </li>
        <li>
          <div className='socials-link'>
            <a href={''} target='_blank' rel='noreferrer'>
              <IconTwitter />
            </a>
          </div>
        </li>
        <li>
          <div className='socials-link'>
            <a href={''} target='_blank' rel='noreferrer'>
              <IconLinkedin />
            </a>
          </div>
        </li>
      </ul>
      <p className='font-mono text-xl text-blue-700 cursor-pointer hover:text-cyan-600 duration-300 mb-10'>
        <a target='_blank' rel='noreferrer' href='https://github.com/rtpa25/rp'>
          Designed and Built by{' '}
          <RoughNotation show={true} type={'circle'} animationDuration={3000}>
            RP
          </RoughNotation>
        </a>
      </p>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), {
  ssr: false,
});
