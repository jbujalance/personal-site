import Head from 'next/head';

type Props = {
  title: string
}

export default function HeadTag(props: Props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="The personal website of José Bujalance, a full stack web developer" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
