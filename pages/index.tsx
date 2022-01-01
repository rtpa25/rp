/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import TechStack from '../components/TechStack';
import { Hero, Navbar, Projects } from '../components/z(exporter)';
import { Fade } from 'react-awesome-reveal';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ronit Panda</title>
        <meta
          name='Ronit'
          content={`
          Ronit's personal portfolio
        `}
        />
      </Head>
      <Navbar />
      <Fade cascade={true} duration={500}>
        <Hero />
        <Projects />
        <TechStack />
      </Fade>
    </div>
  );
};

export default Home;
