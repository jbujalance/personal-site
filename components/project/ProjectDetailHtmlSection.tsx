type Props = {
  htmlContent: string
}

export default function ProjectDetailHtmlSection(props: Props) {
  return (
    <section className="section">
      <div className="container" dangerouslySetInnerHTML={{ __html: props.htmlContent }} />
    </section>
  );
}
