import Image from 'next/image';

const ProjectCard = () => (
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <Image
          src="/img/1280x960.png"
          alt="Placeholder image"
          width={1280}
          height={960}
        />
      </figure>
    </div>
    <div className="card-content">
      <h1 className="title">Title</h1>
      <div className="content">
        A brief project description.
      </div>
    </div>
  </div>
);

export default ProjectCard;
