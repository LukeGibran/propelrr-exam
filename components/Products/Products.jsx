const Products = () => {
  return (
    <section id="productSection">
      <div className="section__header">
        <h1>New Products</h1>
      </div>
      <div className="products__lists-wrapper">
        <div className="products__lists">
          <div className="products__list first-product">
            <div className="product__details">
              <div className="product__details-text">
                <div className="product__title">
                  <h3>HJC CL-17 Captain America (Snell)</h3>
                </div>
                <p className="product__price">$350.5</p>
                <div className="product__button">
                  <button>Buy Now</button>
                </div>
              </div>
              <div className="product__details-img">
                <img
                  src="/images/image-1.png"
                  alt="HJC CL-17 Captain America (Snell)"
                  className="product-img image-1"
                />
              </div>
            </div>
          </div>
          <div className="products__list ">
            <div className="product__title">
              <h3>ZEUS Z-806 NEW SUPERTECH II50 MATT</h3>
            </div>
            <div className="product__details">
              <div className="product__details-text">
                <p className="product__price">$350.5</p>
                <div className="product__button">
                  <button>Buy Now</button>
                </div>
              </div>
              <div className="product__details-img">
                <img
                  src="/images/image-2.png"
                  alt="HJC CL-17 Captain America (Snell)"
                  className="product-img image-2"
                />
              </div>
            </div>
          </div>
          <div className="products__list ">
            <div className="product__title">
              <h3>ARAI TOUR CROSS 3 - DETOUR RED</h3>
            </div>
            <div className="product__details">
              <div className="product__details-text">
                <p className="product__price">$350.5</p>
                <div className="product__button">
                  <button>Buy Now</button>
                </div>
              </div>
              <div className="product__details-img">
                <img
                  src="/images/image-3.png"
                  alt="HJC CL-17 Captain America (Snell)"
                  className="product-img image-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
