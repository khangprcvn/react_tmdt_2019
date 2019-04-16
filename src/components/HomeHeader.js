import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class HomeHeader extends React.Component {
  render() {  
    let store = localStorage.getItem("state");
    let lengthStore = 1;
    if (!store) {
      lengthStore = 1;
    } else {
      lengthStore = JSON.parse(store).cart.productCart.length;
    }
    const hiUser = (!this.props.user || this.props.user.message) ? (
      <div className="up-item">
        <i className="flaticon-profile" />
        <Link to="/login">Log In </Link> or{' '}
        <Link to="/signup">Create Account</Link>
      </div>
    ) : (
      <div className="up-item">
        <i className="flaticon-profile" />
        Hi {this.props.user.name} <a href="/logout">Log out</a>
      </div>
    );
    return (
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 text-center text-lg-left">
                {/* <Link to="/" className="site-logo">
                  <img src="/img/logo.png" alt="" />
                </Link> */}
              </div>
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
                  <div className="up-item">
                    <div className="shopping-card">
                      <i className="flaticon-bag" />
                      <span>{lengthStore}</span>
                    </div>
                    <Link to="/product/cart">Shopping Cart</Link>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product/women">Women</Link>
              </li>
              <li>
                <Link to="/product/men">Men</Link>
              </li>
              <li>
                <Link to="#1">
                  Sale
                  <span className="new">Hot</span>
                </Link>
              </li>
              <li>
                <Link to="/brand">Brand</Link>
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
