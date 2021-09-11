import { chunk, fillToMultiple } from '../../lib/array-utils';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

export type ProjectcardGridProps = {
  projects: ProjectCardProps[]
}

const ProjectCardGrid = (props: ProjectcardGridProps) => {
  const numberOfColumns = 3;

  // Create column divs
  let columns = props.projects.map(project => 
    <div key={project.title} className="column">
      <ProjectCard title={project.title} description={project.description} image={project.image} link={project.link} sourceLink={project.sourceLink} />
    </div>
  );

  // We add empty columns to ensure we have a length multiple of 'numberOfColumns'
  columns = fillToMultiple(columns, numberOfColumns, (index) => <div key={`empty_${index}`} className="column"></div>);

  // We divide the projects in groups of three columns
  const columnGroups = chunk(columns, 3);
  
  return (
    <>
      {
        columnGroups.map((column, index) =>
          <div key={index} className="columns">
            {column}
          </div>
        )
      }
    </>
  );
};

export default ProjectCardGrid;
