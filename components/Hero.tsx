/** @format */

import React from 'react';

const Hero = () => {
  return (
    <div className='md:mx-20 md:my-20 flex mx-5 my-40'>
      <div className='flex flex-col items-start justify-between'>
        <div>
          <h1 className='font-mono text-blue-700 ml-2 mb-4 text-lg'>
            Hi, my name is
          </h1>
          <h2 className='text-5xl font-extrabold text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500'>
            Ronit Panda.
          </h2>
          <h3 className='text-4xl md:text-6xl font-bold mt-4 mb-8 text-blue-500 '>
            A person who iterates fast
          </h3>
          <div className=''>
            <p className='mt-4 lg:text-lg text-gray-700 text-lg'>
              I’m a software developer specializing in building full stack web{' '}
              and mobile apps. Currently, I’m actively looking for an internship
              at a seed or pre-seed state startup as a Full-Stack developer and{' '}
              <span>
                contribute to teams that are trying to make a difference
              </span>
              .
            </p>
          </div>
        </div>
        <div>
          <a
            href={`mailto:pandaronit25@gmail.com`}
            className='mt-20 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-105 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 md:text-3xl text-xl'>
              GET IN TOUCH
            </span>
          </a>
        </div>
      </div>
      <div className='lg:w-full lg:flex lg:justify-end hidden'>
        {/* <Image src={profilePic} alt={'Ronit'} className='w-full' /> */}
        <iframe
          src='https://embed.lottiefiles.com/animation/74635'
          width='500px'
          height='500px'
        />
      </div>
    </div>
  );
};

export default Hero;
