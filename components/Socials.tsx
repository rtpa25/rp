/** @format */

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import IconGitHub from './icons/Github';
import IconLinkedin from './icons/Linkedin';
import IconTwitter from './icons/Twitter';

const Socials: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  if (width > 768) {
    return (
      <div className='md:fixed md:bottom-0'>
        <ul className='social-line-custom-css-style'>
          <li>
            <div className='socials-link'>
              <a
                href={'https://github.com/rtpa25'}
                target='_blank'
                rel='noreferrer'>
                <IconGitHub />
              </a>
            </div>
          </li>
          <li>
            <div className='socials-link'>
              <a
                href={'https://twitter.com/panda_ronit'}
                target='_blank'
                rel='noreferrer'>
                <IconTwitter />
              </a>
            </div>
          </li>
          <li>
            <div className='socials-link'>
              <a
                href={'https://www.linkedin.com/in/rtpa25/'}
                target='_blank'
                rel='noreferrer'>
                <IconLinkedin />
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default dynamic(() => Promise.resolve(Socials), {
  ssr: false,
});
