import Head from "next/head";
import "../styles/globals.scss";

import Layout from "../components/layout/layout.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>EVNX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
