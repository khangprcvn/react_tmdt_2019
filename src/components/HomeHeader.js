import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
          <a href="/logout" style={{ padding: '10px' }}>Thoát</a>
        </div>
      );
    return (
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-2 text-center text-lg-left">
                  <img src="/img/logo.png" alt="" />
              </div> */}
              <div className="col-xl-6 col-lg-5">
                <form className="header-search-form">
                  <input type="text" placeholder="Search on ..." />
                  <button>
                    <i className="flaticon-search" />
                  </button>
                </form>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="user-panel">
                  {/* <div className="up-item">
                    <i className="flaticon-profile" />
                    <Link to="/login">Log In </Link> or{' '}
                    <Link to="/signup">Create Account</Link>
                  </div> */}
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
                <Link to="/product/women">Nữ</Link>
              </li>
              <li>
                <Link to="/product/men">Nam</Link>
              </li>
              <li>
                <Link to="#1">
                  Khuyến mãi
                  <span className="new">Hot</span>
                </Link>
              </li>
              <li>
                <Link to="/product/brand/sakura">Thương hiệu</Link>
                <ul className="sub-menu">
                  <li>
                    <Link
                      to={{
                        pathname: '/product/brand/sakura'
                      }}
                    >
                      Sakura
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: '/product/brand/clinque'
                      }}
                    >
                      Clinque
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: '/product/brand/neostrata'
                      }}
                    >
                      Neostrata
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: '/product/brand/paula'
                      }}
                    >
                      Paula
                    </Link>
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
