import LinkButtonsGroup, { LinkButtonMetadata } from './LinkButtonsGroup';

const linksMetadata: LinkButtonMetadata[] = [
  {
    href: 'https://www.linkedin.com/in/josebujalancemartin',
    icon: 'fab fa-linkedin'
  },
  {
    href: 'https://github.com/jbujalance',
    icon: 'fab fa-github'
  }
];

const SocialMediaLinks = () => (
  <LinkButtonsGroup links={linksMetadata}/>
);

export default SocialMediaLinks;
