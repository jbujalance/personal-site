import { GetStaticPaths, GetStaticProps } from 'next';
import ProjectDetailHero from '../../components/project-detail/ProjectDetailHero';
import ProjectDetailLayout from '../../components/project-detail/ProjectLayout';
import { getAllProjectIds, getProjectData, ProjectData } from '../../lib/projects';

type Props = ProjectData;

export default function ProjectDetail(props: Props) {
  return (
    <ProjectDetailLayout projectTitle={props.metadata.title}>
      <ProjectDetailHero
        title={props.metadata.title}
        subtitle={props.metadata.subtitle}
      />
    </ProjectDetailLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projectIds = getAllProjectIds();
  const paths = projectIds.map(id => ({ params: { projectId: id } }));
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const projectId = context.params?.projectId;
  if (!projectId) {
    throw Error("Missing parameter 'projectId'");
  }
  const projectData = getProjectData(projectId as string);
  return {
    props: {
      ...projectData
    }
  }
}
