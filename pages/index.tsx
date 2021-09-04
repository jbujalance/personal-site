import { GetStaticProps } from 'next';
import About from '../components/About';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Projects, { ProjectsProps } from '../components/Projects';

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

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  // TODO load from markdown files
  return {
    props: {
      projects: [
        {
          title: "WebIR",
          description: "An HTTP interface to an infra-red (IR) actuator",
          image: "/img/1280x960.png",
          link:"/projects/webir"
        },
        {
          title: "WebIR",
          description: "An HTTP interface to an infra-red (IR) actuator",
          image: "/img/1280x960.png",
          link:"/projects/webir"
        },
        {
          title: "WebIR",
          description: "An HTTP interface to an infra-red (IR) actuator",
          image: "/img/1280x960.png",
          link:"/projects/webir"
        },
        {
          title: "WebIR",
          description: "An HTTP interface to an infra-red (IR) actuator",
          image: "/img/1280x960.png",
          link:"/projects/webir"
        }
      ]
    }
  };
};
