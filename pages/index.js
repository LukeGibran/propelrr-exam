import Head from "next/head";

// Components
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Products from "../components/Products/Products";
import BlogEvents from "../components/BlogEvents/BlogEvents";

export default function Home() {
  return (
    <>
      <Head>
        <title>EVNX Homepage</title>
        <meta name="description" content="This the homepage of EVNX." />
      </Head>
      <HeroBanner />
      <Products />
      <BlogEvents />
    </>
  );
}
