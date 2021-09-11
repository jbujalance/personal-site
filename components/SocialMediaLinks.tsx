import LinkButtonsGroup, { LinkButtonMetadata } from './LinkButtonsGroup';

const linksMetadata: LinkButtonMetadata[] = [
  {
    href: 'https://www.linkedin.com/in/josebujalancemartin',
    icon: 'fab fa-linkedin fa-lg'
  },
  {
    href: 'https://github.com/jbujalance',
    icon: 'fab fa-github fa-lg'
  },
  {
    href: 'mailto:contact@jbujalance.com',
    icon: 'fas fa-envelope fa-lg'
  }
];

const SocialMediaLinks = () => (
  <LinkButtonsGroup links={linksMetadata}/>
);

export default SocialMediaLinks;
