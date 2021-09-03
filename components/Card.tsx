const Card = () => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-16by9">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
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

export default Card;
