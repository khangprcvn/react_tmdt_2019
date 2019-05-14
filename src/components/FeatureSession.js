import React from 'react';
// import video from '../img/video.mp4';
export default class FeatureSection extends React.Component {
  render() {
    return (
      <div>
        <section className="hero-section">
          <div className="hero-slider owl-carousel">
            <div className="container">
              <div className="row">
                <iframe
                  width="1200"
                  height="480"
                  src="https://www.youtube.com/embed/Iz6sUpk_gNU"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            {/* <div className="hs-item set-bg" data-setbg="/img/bg-6.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span style={{ color: '#FF4040' }}>New Product</span>
                    <h2 style={{ color: '#FF4040' }}>New Beauty</h2>
                  </div>
                </div>
                <div className="offer-card text-white">
                  <span>FROM</span>
                  <h2>199K</h2> 
                </div>
              </div>
            </div>
            <div className="hs-item set-bg" data-setbg="/img/bg-4.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span style={{ color: '#FF4040' }}>New Product</span>
                    <h2 style={{ color: '#FF4040' }}>New Beauty</h2>
                  </div>
                </div>
                <div className="offer-card text-white">
                  <span>FROM</span>
                  <h2>99K</h2>
                </div>
              </div>
            </div> */}
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
                  <h2>Chất lượng</h2>
                </div>
              </div>
              <div className="col-md-4 p-0 feature">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src="/img/icons/1.png" alt="#" />
                  </div>
                  <h2>Uy tín</h2>
                </div>
              </div>
              <div className="col-md-4 p-0 feature">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img src="/img/icons/1.png" alt="#" />
                  </div>
                  <h2>Nhanh & miễn phí</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
