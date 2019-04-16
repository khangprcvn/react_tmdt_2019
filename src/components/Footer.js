import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>About</h2>
                <p>
                  Group 4
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>Page</h2>
                <ul>
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="">Women</Link>
                  </li>
                  <li>
                    <Link to="">Men</Link>
                  </li>
                  <li>
                    <Link to="">Sales</Link>
                  </li>
                  <li>
                    <Link to="">Brands</Link>
                  </li>
                  <li>
                    <Link to="">Category</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget contact-widget">
                <h2>Contact</h2>
                <div className="con-info">
                  <span>C.</span>
                  <p>Beauty </p>
                </div>
                <div className="con-info">
                  <span>B.</span>
                  <p>HCMUT</p>
                </div>
                <div className="con-info">
                  <span>T.</span>
                  <p>+53 345 7953 32453</p>
                </div>
                <div className="con-info">
                  <span>E.</span>
                  <p>hcmut@edu.vn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;