import ProjectCard from "./ProjectCard";

const ProjectCardGrid = () => (
  <>
    <div className="columns">
      <div className="column">
        <ProjectCard />
      </div>
      <div className="column">
        <ProjectCard />
      </div>
      <div className="column">
        <ProjectCard />
      </div>
    </div>

    <div className="columns">
      <div className="column">
        <ProjectCard />
      </div>
      <div className="column">
        <ProjectCard />
      </div>
      <div className="column">
        <ProjectCard />
      </div>
    </div>
  </>
);

export default ProjectCardGrid;
