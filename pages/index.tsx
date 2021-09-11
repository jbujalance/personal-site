import { GetStaticProps } from 'next';
import About from '../components/About';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Projects, { ProjectsProps } from '../components/Projects';
import { getAllProjectsData } from '../lib/projects';

type Props = ProjectsProps;

/**
 * This is the landing page.
 * @returns The JSX component to render.
 */
export default function Home(props: Props) {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Projects projects={props.projects}/>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const projectsData = getAllProjectsData();
  return {
    props: {
      projects: projectsData.map(projectData => ({
        title: projectData.metadata.title,
        description: projectData.metadata.subtitle,
        image: `/img/projects/${projectData.id}.png`,
        link: `/projects/${projectData.id}`,
        ...(projectData.metadata.sourceLink && { sourceLink: projectData.metadata.sourceLink })
      }))
    }
  };
};
