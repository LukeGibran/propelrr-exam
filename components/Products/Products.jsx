import { motion } from "framer-motion";
const Products = ({ easing, fadeInUp, stagger }) => {
  return (
    <motion.section
      id="productSection"
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <div className="section__header">
        <motion.h1 variants={fadeInUp}>New Products</motion.h1>
      </div>
      <div className="products__lists-wrapper">
        <div className="products__lists">
          <motion.div
            variants={fadeInUp}
            className="products__list first-product"
          >
            <motion.div
              className="mask"
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{
                delay: 0.1,
                ease: easing,
                default: { duration: 0.5 },
              }}
            ></motion.div>
            <div className="product__details">
              <div className="product__details-text">
                <motion.div variants={fadeInUp} className="product__title">
                  <h3>HJC CL-17 Captain America (Snell)</h3>
                </motion.div>
                <motion.p variants={fadeInUp} className="product__price">
                  $350.5
                </motion.p>
                <motion.div variants={fadeInUp} className="product__button">
                  <button>Buy Now</button>
                </motion.div>
              </div>
              <div className="product__details-img">
                <img
                  src="/images/image-1.png"
                  alt="HJC CL-17 Captain America (Snell)"
                  className="product-img image-1"
                />
              </div>
            </div>
          </motion.div>
          <motion.div variants={stagger} className="products__list ">
            <motion.div
              className="mask"
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{
                delay: 0.1,
                ease: easing,
                default: { duration: 0.5 },
              }}
            ></motion.div>
            <motion.div variants={fadeInUp} className="product__title">
              <h3>ZEUS Z-806 NEW SUPERTECH II50 MATT</h3>
            </motion.div>
            <div className="product__details">
              <div className="product__details-text">
                <motion.p variants={fadeInUp} className="product__price">
                  $350.5
                </motion.p>
                <motion.div variants={fadeInUp} className="product__button">
                  <button>Buy Now</button>
                </motion.div>
              </div>
              <div className="product__details-img">
                <img
                  src="/images/image-2.png"
                  alt="HJC CL-17 Captain America (Snell)"
                  className="product-img image-2"
                />
              </div>
            </div>
          </motion.div>
          <motion.div variants={stagger} className="products__list ">
            <motion.div
              className="mask"
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{
                delay: 0.1,
                ease: easing,
                default: { duration: 0.5 },
              }}
            ></motion.div>
            <motion.div variants={fadeInUp} className="product__title">
              <h3>ARAI TOUR CROSS 3 - DETOUR RED</h3>
            </motion.div>
            <div className="product__details">
              <div className="product__details-text">
                <motion.p variants={fadeInUp} className="product__price">
                  $350.5
                </motion.p>
                <motion.div variants={fadeInUp} className="product__button">
                  <button>Buy Now</button>
                </motion.div>
              </div>
              <div className="product__details-img">
                <img
                  src="/images/image-3.png"
                  alt="HJC CL-17 Captain America (Snell)"
                  className="product-img image-3"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
