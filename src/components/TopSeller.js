import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSellerProduct } from '../redux/product';
class TopSeller extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSellerProduct();
  }
  render() {
    let sellerProduct = [];
    let item;
    if (this.props.sellerProduct !== undefined) {
      sellerProduct = this.props.sellerProduct;
      item = sellerProduct.map(product => (
        <div
          className="col-lg-3 col-sm-6"
          key={product._id}
        >
          <div className="product-item">
            <div className="pi-pic">
              <img src={product.logo} alt="" />
              <div className="pi-links">
                <a href="#" className="add-card">
                  <i className="flaticon-bag" />
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
                  <i className="flaticon-heart" />
                </a>
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
      <section className="product-filter-section">
        <div className="container">
          <div className="section-title">
            <h2>Sản Phẩm Bán Chạy</h2>
          </div>

          <div className="row">{item}</div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state.product;
};

export default connect(
  mapStateToProps,
  { getSellerProduct }
)(TopSeller);
