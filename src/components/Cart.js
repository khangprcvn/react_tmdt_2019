import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeQuantity, removeProduct } from '../redux/cart';
import '../js/bootstrap-notify.min.js';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeProduct: []
    };
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangRemove = this.onChangRemove.bind(this);
  }
  onChangeQuantity(index, newQuantity) {
    newQuantity = parseInt(newQuantity);
    const change = {
      index,
      newQuantity
    };
    this.props.changeQuantity(change);
  }

  onChangRemove(index) {
    $.notify(
      {
        message: 'Sản phẩm đã được xóa khỏi giỏ hàng của bạn'
      },
      {
        type: 'warning',
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
    this.props.removeProduct(index);
  }

  render() {
    let productCart = this.props.productCart.productCart;
    let totalProduct = 0;
    productCart.map(product => {
      totalProduct +=
        product.price * product.quantity -
        (product.sale / 100) * product.price * product.quantity;
    });
    const cart = productCart.map((product, index) => (
      <tr key={index}>
        <td className="product-col">
          <img src={product.logo} alt="" />
          <div className="pc-title">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        </td>
        <td className="quy-col">
          <div className="quantity">
            <div className="pro-qty">
              <input
                style={{width: "40px"}}
                min="1"
                id="quantity"
                type="number"
                max="10"
                defaultValue={product.quantity}
                onChange={e => this.onChangeQuantity(index, e.target.value)}
              />
            </div>
          </div>
        </td>
        <td className="size-col">
          <h4>{product.brand}</h4>
        </td>
        <td className="size-col">
          <h4>{product.sale}%</h4>
        </td>
        <td className="total-col">
          <h4>
            {product.price * product.quantity -
              (product.sale / 100) * product.price}
          </h4>
        </td>
        <td className="size-col">
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={() => this.onChangRemove(product._id)}
          />
        </td>
      </tr>
    ));
    return (
      <div>
        <div className="page-top-info">
          <div className="container">
            <h4>Your cart</h4>
            <div className="site-pagination">
              <a href="">Home</a> /<a href="">Your cart</a>
            </div>
          </div>
        </div>

        <section className="cart-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="cart-table">
                  <h3>Your Cart</h3>
                  <div className="cart-table-warp">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-th">Sản phẩm</th>
                          <th className="quy-th">Số lượng</th>
                          <th className="size-th">Thương hiệu</th>
                          <th className="size-th">Khuyến mãi</th>
                          <th className="total-th">Giá (On Sale)</th>
                          <th className="total-th" />
                        </tr>
                      </thead>
                      <tbody>{cart}</tbody>
                    </table>
                  </div>
                  <div className="total-cost">
                    <h6>
                      Tổng tiền <span>{totalProduct}</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 card-right">
                <form className="promo-code-form">
                  <input type="text" placeholder="Enter promo code" />
                  <button>Submit</button>
                </form>
                {/* <a href="/product/cart" className="site-btn">Update Cart</a> */}
                <Link to="/product/checkout" className="site-btn sb-dark">
                  Tiếp tục
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productCart: state.cart
  // newProduct: state.cart.productToAdd
});

export default connect(
  mapStateToProps,
  { changeQuantity, removeProduct }
)(Cart);
