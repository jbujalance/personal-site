import Image from 'next/image';
import Section from './Section';
import SocialMediaLinks from './SocialMediaLinks';

export const ABOUT_SECTION_ID = 'about';

const About = () => (
  <Section id={ABOUT_SECTION_ID} title="About me">
    <div className="columns">
      <div className="column is-one-fifth">
        <figure className="block image is-shadowed">
          <Image
            src="/img/profile.jpg"
            alt="Profile"
            width={1000}
            height={1000}
            layout="responsive"
          />
        </figure>
        <div className="block has-text-centered is-italic is-size-7">
          <span>Me and my friend</span>
        </div>
      </div>
      <div className="column">
        <div className="content">
          <p>
            I have been working as a full stack web developer since 2017, with experience in web and mobile applications development following the
            Agile methodology. I am more attracted to the backend than the frontend, and I have had the
            opportunity to participate in every level of the development, from conception and architecture, to implementation and deployment.
            I am always interested on the new trends and technologies, and I try to keep up to date.
            Experienced in Java, I value the clarity, legibility and maintainability of the codebase.
          </p>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  </Section>
);

export default About;
