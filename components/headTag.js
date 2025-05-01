import Head from "next/head";

const HeadTag = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" sizes="any" type="image/svg+xml" href="/Logoe.svg" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
  );
};

export default HeadTag;
