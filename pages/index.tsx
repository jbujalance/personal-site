import type { NextPage } from 'next';
import Hero from '../components/Hero';

/**
 * This is the landing page.
 * @returns The JSX component to render.
 */
const Home: NextPage = () => {
  return (
    <div>
      <Hero/>
    </div>
  );
};

export default Home;
