import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import ProjectDetailHero from '../../components/project/ProjectDetailHero';
import ProjectDetailHtmlSection from '../../components/project/ProjectDetailHtmlSection';
import ProjectDetailLayout from '../../components/project/ProjectDetailLayout';
import { getAllProjectIds, getProjectData, ProjectData } from '../../lib/projects';

type Props = ProjectData;

export default function ProjectDetail(props: Props) {
  return (
    <ProjectDetailLayout projectTitle={props.metadata.title}>

      <ProjectDetailHero
        title={props.metadata.title}
        subtitle={props.metadata.subtitle}
      />

      <ProjectDetailHtmlSection htmlContent={props.html} />

      <section className="section" id="back-home">
        <div className="container">
          <Link href="/#projects">
            <a>← Back to home</a>
          </Link>
        </div>
      </section>
      
    </ProjectDetailLayout>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const projectIds = getAllProjectIds();
  const paths = projectIds.map(id => ({ params: { projectId: id } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const projectId = context.params?.projectId;
  if (!projectId) {
    throw Error('Missing parameter \'projectId\'');
  }
  const projectData = await getProjectData(projectId as string);
  return {
    props: {
      ...projectData
    }
  };
};
