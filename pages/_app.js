import Head from "next/head";
import "../styles/globals.scss";

import { AnimatePresence } from "framer-motion";

import Layout from "../components/layout/layout.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>EVNX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
