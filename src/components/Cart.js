import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { changeQuantity, removeProduct } from '../redux/cart';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeProduct: []
    };
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangRemove = this.onChangRemove.bind(this);
  }
  onChangeQuantity(index) {
    let value = $('#quantity').val();
    let newQuantity = parseInt(value);
    const change = {
      index,
      newQuantity
    };
    this.props.changeQuantity(change);
    // console.log(index);
  }

  onChangRemove(index) {
    this.props.removeProduct(index);
  }

  render() {
    console.log('cart', this.props.productCart.productCart);
    let productCart = this.props.productCart.productCart;
    let totalProduct = 0;
    productCart.map(product => {
      totalProduct += product.price * product.quantity;
    });
    const cart = productCart.map((product, index) => (
      <tr key={index}>
        <td className="product-col">
          <img src={product.picture.dataPicture} alt="" />
          <div className="pc-title">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        </td>
        <td className="quy-col">
          <div className="quantity">
            <div className="pro-qty">
              <input
                min="1"
                id="quantity"
                type="number"
                defaultValue={product.quantity}
                onChange={() => this.onChangeQuantity(index)}
              />
            </div>
          </div>
        </td>
        <td className="size-col">
          <h4>{product.brand}</h4>
        </td>
        <td className="total-col">
          <h4>{product.price * product.quantity}</h4>
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
                          <th className="product-th">Product</th>
                          <th className="quy-th">Quantity</th>
                          <th className="size-th">Brand</th>
                          <th className="total-th">Price</th>
                          <th className="total-th" />
                        </tr>
                      </thead>
                      <tbody>{cart}</tbody>
                    </table>
                  </div>
                  <div className="total-cost">
                    <h6>
                      Total <span>{totalProduct}</span>
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
                  Continue shopping
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
