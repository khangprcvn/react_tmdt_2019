import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addProduct } from '../redux/cart';
import '../js/bootstrap-notify.min.js';
class HotProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
  }
  componentDidMount() {
    const url = `/products/brand/sakura`;
    axios
      .get(url, {})
      .then(result => {
        this.setState({
          product: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
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
  render() {
    let listProduct = [];
    let item;
    if (this.state.product) {
      listProduct = this.state.product;
      item = listProduct.map(product => (
        <div className="col-lg-3 col-sm-6" key={product._id}>
          <div className="product-item">
            <div className="pi-pic">
              {product.sale > 0 ? <div className="tag-sale"> - {product.sale} %</div> : null}
              <img src={product.logo} alt="" />
              <div className="pi-links">
                <Link
                  to="/"
                  className="add-card"
                  onClick={() => this.addToCart(product)}
                >
                  <i className="flaticon-bag" />
                  <span>ADD TO CART</span>
                </Link>
                <Link
                  to="/"
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
      ));
    } else {
      item = null;
    }
    return (
      <div>
        <section className="product-filter-section">
          <div className="container">
            <div className="section-title">
              <h2>Sản Phẩm Bán Chạy</h2>
            </div>
            <div className="row">{item}</div>
          </div>
        </section>
        <section class="banner-section">
          <div class="container">
            <div class="banner set-bg" data-setbg="img/bg-7.jpg">
              <div class="tag-new">NEW</div>
              <span>Thương hiệu mới</span>
              <h2>Sakura</h2>
              <a href="/product/brand/sakura" className="site-btn">
                SHOP NOW
              </a>
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
  { addProduct }
)(HotProduct);
