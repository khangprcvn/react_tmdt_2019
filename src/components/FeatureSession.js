import React from 'react';
import {Link} from 'react-router-dom';
export default class FeatureSection extends React.Component {
  render() {
    return (
      <div>
        <section className="hero-section">
          <div className="hero-slider owl-carousel">
            <div className="hs-item set-bg" data-setbg="/img/bg.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span>New Product</span>
                    <h2>New Beauty</h2>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.{' '}
                    </p> */}
                    <Link to="#" className="site-btn sb-line">
                      DISCOVER
                    </Link>
                    <Link to="#" className="site-btn sb-white">
                      ADD TO CART
                    </Link>
                  </div>
                </div>
                <div className="offer-card text-white">
                  <span>from</span>
                  <h2>99K</h2>
                  <p>SHOP NOW</p>
                </div>
              </div>
            </div>
            <div className="hs-item set-bg" data-setbg="/img/bg-2.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span>New Product</span>
                    <h2>New Beauty</h2>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.{' '}
                    </p> */}
                    <Link to="#" className="site-btn sb-line">
                      DISCOVER
                    </Link>
                    <Link to="#" className="site-btn sb-white">
                      ADD TO CART
                    </Link>
                  </div>
                </div>
                <div className="offer-card text-white">
                  <span>from</span>
                  <h2>99K</h2>
                  <p>SHOP NOW</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="slide-num-holder" id="snh-1" />
          </div>
        </section>
        <section className="features-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 p-0 feature">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src="/img/icons/1.png" alt="#" />
                  </div>
                  <h2>Fast Secure Payments</h2>
                </div>
              </div>
              <div className="col-md-4 p-0 feature">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src="/img/icons/1.png" alt="#" />
                  </div>
                  <h2>Premium Products</h2>
                </div>
              </div>
              <div className="col-md-4 p-0 feature">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src="/img/icons/1.png" alt="#" />
                  </div>
                  <h2>Free & fast Delivery</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
