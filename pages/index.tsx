import type { NextPage } from 'next';
import About from '../components/About';
import Hero from '../components/Hero';

/**
 * This is the landing page.
 * @returns The JSX component to render.
 */
const Home: NextPage = () => {
  return (
    <>
      <Hero/>
      <About/>
    </>
  );
};

export default Home;
