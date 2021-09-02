import SocialMediaLinks from './SocialMediaLinks';

export const ABOUT_SECTION_ID = 'about';

const About = () => (
  <section className="section" id={ABOUT_SECTION_ID}>
    <div className="container">
      <div className="content">
        <h1 className="title">About me</h1>
        <p>
          I have been working as a full stack web developer since 2017, with experience in web and mobile applications development following the
          Agile methodology. I am more attracted to the backend than the frontend, and I have had the
          opportunity to participate in every level of the development, from conception and architecture, to implementation and deployment.
          I am always interested on the new trends and technologies, and I try to keep up to date.
          Experienced in Java, I value the clarity, legibility and maintainability of the codebase.
        </p>
        <SocialMediaLinks/>
      </div>
    </div>
  </section>
);

export default About;