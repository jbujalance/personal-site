import Navbar from './Navbar';

const Hero = () => (
  <section className="hero is-primary is-fullheight is-bold">
    <div className="hero-head">
      <Navbar/>
    </div>
    <div className="hero-body">
      <div className="container">
        <div className="subtitle is-5 mb-6">
          This is the personal web page of
        </div>
        <h1 className="title is-1">
          José Bujalance Martín
        </h1>
        <div className="subtitle is-3">
          A Full Stack Web Developer
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
