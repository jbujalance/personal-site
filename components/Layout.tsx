import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
}

const Layout = (props: Props) => (
  <>

    <Head>
      <title>José Bujalance</title>
      <link rel="icon" href="favicon.svg"/>
    </Head>

    <header>
      <Navbar/>
    </header>

    <main>
      { props.children }
    </main>

    <Footer/>

  </>
);

export default Layout;
