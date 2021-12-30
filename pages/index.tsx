/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero, Navbar } from '../components/z(exporter)';

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
      <Hero />
    </div>
  );
};

export default Home;
