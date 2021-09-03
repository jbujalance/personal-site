import type { NextPage } from 'next';
import About from '../components/About';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

/**
 * This is the landing page.
 * @returns The JSX component to render.
 */
const Home: NextPage = () => {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Projects/>
    </Layout>
  );
};

export default Home;
