import Image from 'next/image';
import Link from 'next/link';

export type ProjectCardProps = {
  title: string,
  description: string,
  image: string,
  link: string
}

const ProjectCard = (props: ProjectCardProps) => (
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <Image
          src={props.image}
          alt={props.title}
          width={1280}
          height={960}
        />
      </figure>
    </div>
    <div className="card-content">
      <h1 className="title">{props.title}</h1>
      <div className="content">{props.description}</div>
    </div>
    <footer className="card-footer">
      <Link href={props.link}>
        <a className="card-footer-item">More details</a>
      </Link>
    </footer>
  </div>
);

export default ProjectCard;
