/** @format */

import dynamic from 'next/dynamic';
import React from 'react';
import IconGitHub from './icons/Github';
import IconLinkedin from './icons/Linkedin';
import IconTwitter from './icons/Twitter';

const Socials = () => {
  if (window.innerWidth > 768) {
    return (
      <div className='md:fixed md:bottom-0'>
        <ul className='social-line-custom-css-style'>
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
      </div>
    );
  } else {
    return <></>;
  }
};

export default dynamic(() => Promise.resolve(Socials), {
  ssr: false,
});
