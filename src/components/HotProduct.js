import React from 'react';
class HotProduct extends React.Component {
  render() {
    return (
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>New Products</h2>
          </div>
          <div className="product-slider owl-carousel">
            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/product/1.jpg" alt="" />
                <div className="pi-links">
                  <a href="#1" className="add-card">
                    <i className="flaticon-bag" />
                    <span>ADD TO CART</span>
                  </a>
                  <a href="#1" className="wishlist-btn">
                    <i className="flaticon-heart" />
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>250K</h6>
                <p>Kem dữa da Sakura</p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <div className="tag-new">New</div>
                <img src="/img/product/2.jpg" alt="" />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="flaticon-bag" />
                    <span>ADD TO CART</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="flaticon-heart" />
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>150K</h6>
                <p>Black and White Stripes Dress</p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/product/3.jpg" alt="" />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="flaticon-bag" />
                    <span>ADD TO CART</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="flaticon-heart" />
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>275K</h6>
                <p>Kem dưỡng da Paula</p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/product/4.jpg" alt="" />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="flaticon-bag" />
                    <span>ADD TO CART</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="flaticon-heart" />
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>125K</h6>
                <p>Kem dưỡng ẩm Sakura </p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="/img/product/5.jpg" alt="" />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="flaticon-bag" />
                    <span>ADD TO CART</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="flaticon-heart" />
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>300K</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default HotProduct;