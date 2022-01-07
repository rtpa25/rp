/** @format */

import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const Hero = () => {
  const fast = (
    <RoughNotation
      order={1}
      type={'underline'}
      show={true}
      color='blue'
      animationDuration={2000}>
      fast.
    </RoughNotation>
  );
  const full = (
    <RoughNotation
      order={2}
      type={'highlight'}
      show={true}
      color='rgb(134 239 172)'
      animationDuration={4000}>
      full stack web
    </RoughNotation>
  );
  const difference = (
    <RoughNotation
      order={3}
      type={'highlight'}
      show={true}
      color='rgb(134 239 172)'
      animationDuration={4000}>
      make a difference.
    </RoughNotation>
  );
  const startup = (
    <RoughNotation
      order={4}
      type={'highlight'}
      show={true}
      color='pink'
      animationDuration={4000}>
      my first startup
    </RoughNotation>
  );
  const products = (
    <RoughNotation
      order={5}
      type={'highlight'}
      show={true}
      color='pink'
      animationDuration={4000}>
      building products
    </RoughNotation>
  );
  const order = (
    <RoughNotationGroup>
      {fast}
      {full}
      {difference}
      {startup}
      {products}
    </RoughNotationGroup>
  );

  return (
    <div className='flex mx-5 my-20 md:mx-40 ' id='hero'>
      <div className='flex flex-col items-start justify-between'>
        <div>
          <h1 className='mb-4 ml-2 font-mono text-lg text-blue-700'>
            Hi, my name is
          </h1>
          <h2 className='text-5xl font-extrabold text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500'>
            Ronit Panda.
          </h2>
          <h3 className='mt-4 mb-8 text-4xl font-bold text-blue-500 md:text-6xl '>
            A person who iterates {fast}
          </h3>
          <div className=''>
            <p className='mt-4 text-lg text-gray-700 lg:text-lg'>
              I’m a software developer specializing in building{'  '}
              {full} apps. Currently, I’m looking for an internship at a seed or
              pre-seed stage startup as a Full-Stack developer{'     '}
              and {difference}
            </p>
            <p className='mt-4 text-lg text-gray-700 lg:text-lg'>
              I tried to start {startup}
              {'  '}
              around 9 months ago, although I was make a pretty good app within
              a span of a month and got it on playstore but was clueless most of
              the times. So currently I am looking to be around people who are{' '}
              {products} that bring a difference
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
      <div className='hidden lg:w-full lg:flex lg:justify-end'>
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
