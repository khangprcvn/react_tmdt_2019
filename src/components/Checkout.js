import React from 'react';
import { connect } from 'react-redux';
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick() {
    if(confirm('OK?')) {
      localStorage.clear()
      this.props.history.push('/');
    } else {
      return;
    }
  }
  render() {
    let productCart = this.props.productCart;
    let totalProduct = 0;
    productCart.map(product => {
      totalProduct += product.price * product.quantity;
    });
    const item = productCart.map((product, index) => (
      <div>
        <ul className="product-list" key={index}>
          <li>
            <div className="pl-thumb">
              <img src={product.picture.dataPicture} alt="" />
            </div>
            <h6>{product.name}</h6>
            <p>
              {product.price} x {product.quantity}
            </p>
          </li>
        </ul>
      </div>
    ));
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
        <section className="checkout-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 order-2 order-lg-1">
                <form className="checkout-form">
                  <div className="cf-title">Billing Address</div>
                  <div className="row">
                    <div className="col-md-7">
                      <p>*Billing Information</p>
                    </div>
                    <div className="col-md-5">
                      <div className="cf-radio-btns address-rb">
                        <div className="cfr-item">
                          <input type="radio" name="pm" id="one" />
                          <label for="one">Use my regular address</label>
                        </div>
                        <div className="cfr-item">
                          <input type="radio" name="pm" id="two" />
                          <label for="two">Use a different address</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row address-inputs">
                    <div className="col-md-12">
                      <input type="text" placeholder="Fullname" />
                      <input type="text" placeholder="Address " />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <button onClick={() => this.onHandleClick()} className="site-btn submit-order-btn">Submit</button>
                </form>
              </div>
              <div className="col-lg-4 order-1 order-lg-2">
                <div className="checkout-cart">
                  <h3>Your Cart</h3>
                  {item}
                  <ul className="price-list">
                    <li>
                      Total<p>{totalProduct}</p>
                    </li>
                    <li>
                      Shipping<span>free</span>
                    </li>
                    <li className="total">
                      Total<p>{totalProduct}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.cart;
};

export default connect(mapStateToProps)(Checkout);
