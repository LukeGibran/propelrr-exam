import Head from "next/head";

// Components
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Products from "../components/Products/Products";
import BlogEvents from "../components/BlogEvents/BlogEvents";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.3,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>EVNX Homepage</title>
        <meta name="description" content="This the homepage of EVNX." />
      </Head>
      <HeroBanner easing={easing} fadeInUp={fadeInUp} stagger={stagger} />
      <Products easing={easing} fadeInUp={fadeInUp} stagger={stagger} />
      <BlogEvents easing={easing} fadeInUp={fadeInUp} stagger={stagger} />
    </>
  );
}
