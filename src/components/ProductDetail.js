import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { connect } from 'react-redux';
import { addProduct } from '../redux/cart';
import '../js/bootstrap-notify.min.js';
class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        picture: {
          dataPicture: null
        }
      },
      quantity: 1
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const url = `/products/${id}`;
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

  updateQuantityChange = e => {
    this.setState({
      quantity: e.target.value
    });
  };

  addToCart(product) {
    let newProduct = {
      ...product,
      quantity: parseInt(this.state.quantity)
    };
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
    this.props.addProduct(newProduct);
  }

  render() {
    if (!this.state.product) {
      return <Loading />;
    }
    return (
      <div>
        <div class="page-top-info">
          <div class="container">
            <h4>Chi tiết sản phảm</h4>
            <div class="site-pagination">
              <Link to="/">Home</Link> /<Link to="/product">Product</Link>
            </div>
          </div>
        </div>
        <section className="product-section">
          <div className="container">
            <div className="back-link">
              <Link to="/product/women"> &lt;&lt; Quay về trang sản phẩm</Link>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="product-pic-zoom">
                  <img
                    className="product-big-img"
                    src={this.state.product.logo}
                    alt=""
                  />
                </div>
                <div className="product-thumbs" tabIndex="1">
                  <div className="product-thumbs-track">
                    {/* <div
                      className="pt active"
                      data-imgbigurl={p1}
                    > */}
                    {/* <img src="img/single-product/thumb-1.jpg" alt="" /> */}
                    {/* </div> */}
                    {/* <div className="pt" data-imgbigurl="img/single-product/2.jpg">
                      <img src="img/single-product/thumb-2.jpg" alt="" />
                    </div>
                    <div className="pt" data-imgbigurl="img/single-product/3.jpg">
                      <img src="img/single-product/thumb-3.jpg" alt="" />
                    </div>
                    <div className="pt" data-imgbigurl="img/single-product/4.jpg">
                      <img src="img/single-product/thumb-4.jpg" alt="" />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 product-details">
                <h2 className="p-title">{this.state.product.name}</h2>
                <h3 className="p-price">{this.state.product.price}VNĐ</h3>
                <h4 className="p-stock">
                  Tình trạng: <span>Còn hàng</span>
                </h4>
                <div className="p-rating">
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o fa-fade" />
                </div>
                <div className="p-review">
                  <a href="">3 reviews</a>|<a href="">Add your review</a>
                </div>
                <div className="quantity">
                  <p>Số lượng</p>
                  <div className="pro-qty">
                    <input
                      id="quantity"
                      type="number"
                      min="1"
                      max="10"
                      defaultValue={this.state.quantity}
                      onChange={this.updateQuantityChange}
                    />
                  </div>
                </div>
                <button
                  className="site-btn"
                  onClick={() => this.addToCart(this.state.product)}
                >
                  <i class="fa fa-shopping-cart" /> Chọn mua
                </button>
                <div id="accordion" className="accordion-area">
                  <div className="panel">
                    <div className="panel-header" id="headingOne">
                      <button
                        className="panel-link active"
                        data-toggle="collapse"
                        data-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        Thông tin
                      </button>
                    </div>
                    <div
                      id="collapse1"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="panel-body">
                        {this.state.product.information}
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-header" id="headingTwo">
                      <button
                        className="panel-link"
                        data-toggle="collapse"
                        data-target="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        Thành phần{' '}
                      </button>
                    </div>
                    <div
                      id="collapse2"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="panel-body">
                        <p>{this.state.product.ingredient}</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-header" id="headingThree">
                      <button
                        className="panel-link"
                        data-toggle="collapse"
                        data-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3"
                      >
                        shipping & Returns
                      </button>
                    </div>
                    <div
                      id="collapse3"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="panel-body">
                        <h4>Free Ship & Trả hàng trong vòng 30 ngày</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social-sharing">
                  <a href="">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="">
                    <i className="fa fa-pinterest" />
                  </a>
                  <a href="">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="">
                    <i className="fa fa-youtube" />
                  </a>
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
  { addProduct }
)(ProductDetail);
