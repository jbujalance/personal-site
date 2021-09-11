import Footer from './Footer';
import HeadTag from './HeadTag';

type Props = {
  children: React.ReactNode;
}

const Layout = (props: Props) => (
  <>

    <HeadTag title="José Bujalance"/>

    <main>
      { props.children }
    </main>

    <Footer/>

  </>
);

export default Layout;
