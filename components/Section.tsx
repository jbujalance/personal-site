type Props = {
  id?: string,
  title?: string,
  children: React.ReactNode
}

const Section = (props: Props) => (
  <section className="section" id={props.id}>
    <div className="container">
      { props.title ? <h2 className="title">{props.title}</h2> : null }
      { props.children }
    </div>
  </section>
);

export default Section;
