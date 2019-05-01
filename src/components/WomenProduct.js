import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductPage, loadMoreProduct } from '../redux/product';
import { Link } from 'react-router-dom';
import { addProduct } from '../redux/cart';
import Loading from './Loading';
import loadjs from 'loadjs';
import '../js/bootstrap-notify.min.js';
class WomenProduct extends Component {
  constructor(props) {
    super(props);
    this.handleDetailProduct = this.handleDetailProduct.bind(this);
    this.handleLoadPage = this.handleLoadPage.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  addToCart(product) {
    $.notify(
      {
        message: 'Đã thêm sản phẩm vào giỏ hàng'
      },
      {
        type: 'info',
        placement: {
          from: 'top',
          align: 'right'
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 1000,
        timer: 1000,
        allow_dismiss: false
      }
    );
    this.props.addProduct(product);
  }

  addToFavorite() {
    $.notify(
      {
        message: 'Thông cảm, chức năng đang được hoàn thiện'
      },
      {
        type: 'info',
        placement: {
          from: 'top',
          align: 'right'
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 1000,
        timer: 1000,
        allow_dismiss: false
      }
    );
  }

  handleDetailProduct(id) {
    this.props.history.push(`/product/detail/${id}`);
  }

  componentDidMount() {
    loadjs('../js/main.js');
    this.props.getProductPage(6, 1, null, null);
  }

  handleLoadPage(pageNumber) {
    this.props.loadMoreProduct(6, pageNumber, null, null);
  }

  render() {
    let list = [],
      pageTotal = 0,
      pageNumber = 0,
      totalItem = 0;
    let listProduct;
    if (this.props.product.productWomen !== undefined) {
      list = this.props.product.productWomen.list;
      pageTotal = this.props.product.productWomen.pageTotal;
      pageNumber = this.props.product.productWomen.pageNumber;
      totalItem = this.props.product.productWomen.totalItem;
      listProduct = list.map((product, index) => {
        return (
          <div
            className="col-lg-4 col-sm-4"
            key={index}
            style={{ cursor: 'pointer' }}
          >
            <div className="product-item">
              <div className="pi-pic">
                <img
                  src={product.logo}
                  alt=""
                  style={{ marginTop: '20px' }}
                  onClick={() => this.handleDetailProduct(product._id)}
                />
                <div
                  className="pi-links"
                >
                  <Link
                    to="/product/women"
                    className="add-card"
                    onClick={() => this.addToCart(product)}
                  >
                    <i className="flaticon-bag" />
                    <span>ADD TO CART</span>
                  </Link>
                  <Link
                    to="/product/women"
                    className="wishlist-btn"
                    onClick={this.addToFavorite}
                  >
                    <i className="flaticon-heart" />
                  </Link>
                </div>
              </div>
              <div className="pi-text">
                <h6>{product.price / 1000}.000đ</h6>
                <Link
                  to={{
                    pathname: `/product/detail/${product._id}`
                  }}
                >
                  {product.name}
                </Link>
              </div>
            </div>
          </div>
        );
      });
    } else {
      listProduct = <Loading />;
    }

    return (
      <div>
        <div className="page-top-info">
          <div className="container">
            <h4>Category Page</h4>
            <div className="site-pagination">
              <a href="">Home</a> /<a href="">Women</a>
            </div>
          </div>
        </div>
        <section className="category-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                <div className="filter-widget">
                  <h2 className="fw-title">Categories</h2>
                  <ul className="category-menu">
                    <li>
                      <a href="#">Chăm sóc da mặt</a>
                      <ul class="sub-menu">
                        <li>
                          <Link
                            to={{
                              pathname: `/product/category/duong am`
                            }}
                          >
                            Dưỡng ẩm
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: `/product/category/duong trang`
                            }}
                          >
                            Dưỡng trắng
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: `/product/category/mat na`
                            }}
                          >
                            Mặt nạ
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: `/product/category/chong nang`
                            }}
                          >
                            Chống nắng
                          </Link>
                        </li>
                        <li>
                          <a href="#">Trị mụn</a>
                        </li>
                        <li>
                          <a href="#">Xịt khoáng</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Chăm sóc cơ thể</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="#">Sữa tắm</a>
                        </li>
                        <li>
                          <a href="#">Dưỡng thể</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="filter-widget">
                  <h2 className="fw-title">Brand</h2>
                  <ul className="category-menu">
                    <li>
                      <Link to="/product/brand/sakura">Sakura</Link>
                    </li>
                    <li>
                      <Link to="/product/brand/sakura">Paula</Link>
                    </li>
                    <li>
                      <Link to="/product/brand/clinque">Clinque</Link>
                    </li>
                    <li>
                      <Link to="/product/brand/neoStrata">NeoStrata</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row">
                  {listProduct}
                  <div className="text-center w-100 pt-3">
                    {pageNumber < pageTotal && (
                      <button
                        className="site-btn sb-line sb-dark"
                        onClick={() => this.handleLoadPage(pageNumber + 1)}
                      >
                        Xem thêm
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
  productCart: state.cart.productCart,
  newProduct: state.cart.productToAdd
});

// export default connect(
//   mapStateToProps,
//   { getWomenProduct, addProduct }
// )(WomenProduct);

export default connect(
  mapStateToProps,
  { getProductPage, loadMoreProduct, addProduct }
)(WomenProduct);
