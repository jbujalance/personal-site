import Head from 'next/head';
import Footer from '../Footer';

type Props = {
  projectTitle: string,
  children: React.ReactNode
}

const ProjectDetailLayout = (props: Props) => (
  <>

    <Head>
      <title>{`José Bujalance | ${props.projectTitle}`}</title>
      <link rel="icon" href="/favicon.svg"/>
    </Head>

    <main>
      { props.children }
    </main>

    <Footer/>

  </>
);

export default ProjectDetailLayout;
