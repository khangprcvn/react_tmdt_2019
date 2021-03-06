import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchProduct from './SearchProduct';
class HomeHeader extends React.Component {
  render() {
    let store = localStorage.getItem('state');
    let lengthStore = 1;
    if (!store) {
      lengthStore = 1;
    } else {
      lengthStore = JSON.parse(store).cart.productCart.length;
    }
    const hiUser =
      !this.props.user || this.props.user.message ? (
        <div className="up-item">
          <i className="flaticon-profile" />
          <Link to="/login" style={{ padding: '10px' }}>
            Đăng nhập{' '}
          </Link>{' '}
          <i className="fa fa-sign-in" />{' '}
          <Link to="/signup" style={{ padding: '10px' }}>
            Đăng kí
          </Link>
        </div>
      ) : (
        <div className="up-item">
          <i className="flaticon-profile" />
          <Link to="/" style={{ padding: '10px' }}>
            Hi {this.props.user.name}
          </Link>
          <i className="fa fa-sign-out" />{' '}
          {/* <Link to="/signup" style={{ padding: '10px' }}>
            Đăng kí
          </Link> */}
          <a href="/logout" style={{ padding: '10px' }}>
            Thoát
          </a>
        </div>
      );
    return (
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <SearchProduct />
              <div className="col-xl-4 col-lg-5">
                <div className="user-panel">
                  {hiUser}
                  <div className="up-item" style={{ paddingTop: '10px' }}>
                    <div className="shopping-card">
                      <i className="flaticon-bag" />
                      <span>{lengthStore}</span>
                    </div>
                    <Link to="/product/cart" style={{ padding: '10px' }}>
                      {' '}
                      Shopping Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-navbar">
          <div className="container">
            <ul className="main-menu">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/product/women">Sản phẩm Nữ</Link>
              </li>
              <li>
                <Link to="/product/men">Sản phẩm Nam</Link>
              </li>
              <li>
                <Link to="/product/sale">
                  Khuyến mãi
                  <span className="new">Hot</span>
                </Link>
              </li>
              <li>
                <Link to="/product/brand/sakura">Thương hiệu</Link>
                <ul className="sub-menu">
                  <li>
                    <a href="/product/brand/sakura">Sakura</a>
                  </li>
                  <li>
                    <a href="/product/brand/paula">Paula</a>
                  </li>
                  <li>
                    <a href="/product/brand/clinque">Clinque</a>
                  </li>
                  <li>
                    <a href="/product/brand/neostrata">Neostrata</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return state.user;
};

export default connect(mapStateToProps)(HomeHeader);
