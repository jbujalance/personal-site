import Image from 'next/image';
import Link from 'next/link';

export type ProjectCardProps = {
  title: string,
  description: string,
  image: string,
  link: string,
  sourceLink?: string
}

const ProjectCard = (props: ProjectCardProps) => (
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <Image
          src={props.image}
          alt={props.title}
          width={480}
          height={360}
        />
      </figure>
    </div>
    <div className="card-content">
      <h3 className="title">{props.title}</h3>
      <div className="content">{props.description}</div>
    </div>
    <footer className="card-footer">
      <Link href={props.link}>
        <a className="card-footer-item">More details</a>
      </Link>
      { props.sourceLink &&
        <Link href={props.sourceLink}>
          <a className="card-footer-item" target="_blank" rel="noopener noreferrer">Source</a>
        </Link>
      }
    </footer>
  </div>
);

export default ProjectCard;
