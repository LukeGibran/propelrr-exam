import Image from "next/image";

// Icons
import ArrowIcon from "../icons/arrowIcon";
import ShareIcon from "../icons/shareIcon";

const HeroBanner = () => {
  return (
    <>
      <div className="static-height"></div>
      <section className="heroBanner" id="heroBanner">
        <img src="/images/blob.png" alt="image blob" className="banner__blob" />
        <div className="banner__container">
          <div className="banner__featured-content">
            <div className="banner__card">
              <div className="card__body">
                <div className="card__body-title">
                  <div className="card__body-texts">
                    <h1>TEIXEIRA ADVENTURE</h1>
                    <p>
                      Advanced polycarbonate <br />
                      composite shell
                    </p>
                  </div>
                  <div className="card__details">
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
                  </div>
                </div>
                <div className="card__body-images">
                  <img
                    src="/images/banner-helmet.png"
                    alt="Banner Helmet"
                    className="helmet"
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
    </>
  );
};

export default HeroBanner;
