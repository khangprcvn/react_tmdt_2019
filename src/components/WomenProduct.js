import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductPage, loadMoreProduct } from '../redux/product';
import { addProduct } from '../redux/cart';
import Loading from './Loading';
import loadjs from 'loadjs';
import '../js/bootstrap-notify.min.js';
import CategoryMenu from './CategoryMenu';
import BrandCategoryMenu from './BrandCategoryMenu';
import ListProduct from './ListProduct';
class WomenProduct extends Component {
  constructor(props) {
    super(props);
    this.handleDetailProduct = this.handleDetailProduct.bind(this);
    this.handleLoadPage = this.handleLoadPage.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  componentDidMount() {
    loadjs('../js/main.js');
    this.props.getProductPage(6, 1, null, null);
  }

  handleLoadPage(pageNumber) {
    this.props.loadMoreProduct(6, pageNumber, null, null);
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
      listProduct = list.map(product => {
        return (
          <ListProduct
            product={product}
            clickCart={this.addToCart}
            clickFavorite={this.addToFavorite}
            clickDetailProduct={this.handleDetailProduct}
            pathname={this.props.location.pathname}
          />
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
              <a href="">Home</a> /<a href="/product/women">Women</a>
            </div>
          </div>
        </div>
        <section className="category-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                <div className="filter-widget">
                  <h2 className="fw-title">Categories</h2>
                  <CategoryMenu />
                </div>
                <div className="filter-widget">
                  <BrandCategoryMenu />
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

export default connect(
  mapStateToProps,
  { getProductPage, loadMoreProduct, addProduct }
)(WomenProduct);
