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

type Props = {
  fieldStyles?: string,
  buttonColor?: string
}

const SocialMediaLinks = (props: Props) => (
  <LinkButtonsGroup links={linksMetadata} fieldStyles={props.fieldStyles} buttonColor={props.buttonColor}/>
);

export default SocialMediaLinks;
