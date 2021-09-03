import ProjectCard from './project/ProjectCard';
import ProjectCardGrid from './project/ProjectCardGrid';
import Section from './Section';

export const PROJECTS_SECTION_ID = 'projects';

const Projects = () => (
  <Section id={PROJECTS_SECTION_ID} title="Some projects">
    <div className="content">
      These are some of the personal projects I have worked on for fun and to experiment with technologies
      that I don&apos;t often use in my professional environment.
    </div>
    <ProjectCardGrid/>
  </Section>
);

export default Projects;
