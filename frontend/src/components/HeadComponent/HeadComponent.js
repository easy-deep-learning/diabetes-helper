import Head from "next/head";

export default function HeadComponent(props) {
  const {title} = props;

  return (
    <Head>
        <title>{title}</title>
        <meta name="keywords" content="diabet" />
        <meta name="description" content="assistant for diabetes mellitus" />
        <meta charSet="utf-8" />
      </Head>
  )
}
