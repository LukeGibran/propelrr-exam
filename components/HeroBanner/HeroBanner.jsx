import { motion } from "framer-motion";
// Icons
import ArrowIcon from "../icons/arrowIcon";
import ShareIcon from "../icons/shareIcon";

const HeroBanner = ({ easing, stagger, fadeInUp }) => {
  console.log(easing);
  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <div className="static-height"></div>
      <section className="heroBanner" id="heroBanner">
        <img src="/images/blob.png" alt="image blob" className="banner__blob" />
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          transition={{ delay: 0.1, ease: easing, default: { duration: 0.5 } }}
          className="mask"
        ></motion.div>
        <div className="banner__container">
          <div className="banner__featured-content">
            <div className="banner__card">
              <div className="card__body">
                <motion.div
                  variants={stagger}
                  transition={{ delay: 1 }}
                  className="card__body-title"
                >
                  <motion.div variants={fadeInUp} className="card__body-texts">
                    <motion.h1 variants={fadeInUp}>
                      TEIXEIRA ADVENTURE
                    </motion.h1>
                    <motion.p variants={fadeInUp}>
                      Advanced polycarbonate <br />
                      composite shell
                    </motion.p>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="card__details">
                    <div className="card__details-box">
                      <p>color</p>
                      <span className="circle"></span>
                    </div>
                    <div className="card__details-box">
                      <p>Price</p>
                      <p className="number">$125.9</p>
                    </div>
                    <div className="card__details-button">
                      <a href="#">View Product</a>
                    </div>
                  </motion.div>
                </motion.div>
                <div className="card__body-images">
                  <motion.img
                    src="/images/banner-helmet.png"
                    alt="Banner Helmet"
                    className="helmet"
                    initial={{ y: -30 }}
                    animate={{ y: 1 }}
                    transition={{
                      ease: "linear",
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                  />
                  <img
                    src="/images/banner-helmet-shadow.png"
                    alt="Banner Helmet Shadow"
                    className="helmet--shadow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-arrow right">
            <ArrowIcon />
          </div>
          <div className="navigation-arrow left">
            <ArrowIcon />
          </div>
          <div className="share-button">
            <ShareIcon />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HeroBanner;
