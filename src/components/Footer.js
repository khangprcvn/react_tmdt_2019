import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                  Sản phẩm được tạo nhằm mục đích học tập. Một số hình ảnh có sử
                  dụng nguồn ở trên internet, nếu có ảnh nào vi phạm vui lòng
                  liên hệ qua thông tin bên dưới để gỡ bỏ, cám ơn.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>Pages</h2>
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/product/women">Sản phẩm nữ</Link>
                  </li>
                  <li>
                    <Link to="/product/men">Sản phẩm nam</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/product/sale">Khuyến mãi</Link>
                  </li>
                  <li>
                    <Link to="/product/brand/sakura">Thương hiệu</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget contact-widget">
                <h2>Information</h2>
                <div className="con-info">
                  <span>P.</span>
                  <p>Beauty Page</p>
                </div>
                <div className="con-info">
                  <span>B.</span>
                  <p>268 Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh</p>
                </div>
                <div className="con-info">
                  <span>E.</span>
                  <p>khangviet1996@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-links-warp">
          <div className="container">
            <div className="social-links">
              <a href="" className="instagram">
                <i className="fa fa-instagram" />
                <span>instagram</span>
              </a>
              <a href="mailto:khangviet1996@gmail.com" className="google-plus">
                <i className="fa fa-google-plus" />
                <span>g+plus</span>
              </a>
              <a href="https://www.facebook.com/khangviet1996" className="facebook">
                <i className="fa fa-facebook" />
                <span>facebook</span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=Iz6sUpk_gNU&fbclid=IwAR2Oc6Fr2FfsVQjIxxUjesK8heDjAFF7V91wVTNHvxGdguFui6pfz1xB4fA"
                className="youtube"
              >
                <i className="fa fa-youtube" />
                <span>youtube</span>
              </a>
              <a href="" className="twitter">
                <i className="fa fa-twitter" />
                <span>twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
