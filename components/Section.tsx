type Props = {
  id: string,
  title: string,
  children: React.ReactNode
}

const Section = (props: Props) => (
  <section className="section" id={props.id}>
    <div className="container">
      <h1 className="title">{props.title}</h1>
      { props.children }
    </div>
  </section>
);

export default Section;
