import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit() {
    if (confirm('Bạn muốn hoàn tất đơn hàng')) {
      localStorage.clear();
      swal('Cảm ơn bạn!', 'Đơn hàng đã hoàn tất', 'success');
      this.props.history.push('/');
    } else {
      return;
    }
  }
  render() {
    let productCart = this.props.productCart;
    let totalProduct = 0;
    productCart.map(product => {
      totalProduct +=
        product.price * product.quantity -
        (product.sale / 100) * product.price * product.quantity;
    });
    const item = productCart.map((product, index) => (
      <div>
        <ul className="product-list" key={index}>
          <li>
            <div className="pl-thumb">
              <img src={product.logo} alt="" />
            </div>
            <h6>{product.name}</h6>
            <p>
              {product.price -
                (product.sale / 100) * product.price}{' '}
              x {product.quantity} sp
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
                <form className="checkout-form" onSubmit={this.onHandleSubmit}>
                  <div className="cf-title">
                    Vui lòng điền đầy đủ thông tin của bạn. Chúng tôi sẽ không
                    spam email của bạn
                  </div>
                  <div className="row address-inputs">
                    <div className="col-md-12">
                      <input type="text" placeholder="Fullname" required />
                      <input type="text" placeholder="Address " required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Email" required />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone example: 0385584056"
                        pattern="[0][1-9][0-9]*"
                        minLength="10"
                        maxLength="12"
                        required
                      />
                    </div>
                  </div>
                  <button className="site-btn submit-order-btn">
                    Thanh toán
                  </button>
                </form>
              </div>
              <div className="col-lg-4 order-1 order-lg-2">
                <div className="checkout-cart">
                  <h3>Giỏ hàng của bạn</h3>
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
