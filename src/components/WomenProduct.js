import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWomenProduct } from '../redux/product';
import { Link } from 'react-router-dom';
// import Loading from './Loading';
// import { Loader } from 'semantic-ui-react';
import { addProduct } from '../redux/cart';
import { Pagination } from 'semantic-ui-react';
class WomenProduct extends Component {
  constructor(props) {
    super(props);
    this.onPageChangeHandle = this.onPageChangeHandle.bind(this);
  }
  componentDidMount() {
    // console.log(pageSize, pageNumber);
    this.props.getWomenProduct(15, 1);
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addCartProduct(nextProps.newProduct);
    }
  }
  addCartProduct = product => {
    const productCart = this.props.productCart;
    let productAlreadyInCart = false;
    productCart.forEach(pc => {
      if (pc._id === product._id) {
        pc.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      productCart.push(product);
    }
  };

  onPageChangeHandle(event, page) {
    const pageNumber = page.activePage;
    this.props.womenProduct(15, pageNumber);
  }


  render() {
    let productWomen = [
      {
        picture: { dataPicture: '' },
        price: 0,
        name: ''
      }
    ];
    let item;
    if (
      this.props.product !== null &&
      this.props.product.productWomen !== undefined
    ) {
      productWomen = this.props.product.productWomen;
      item = productWomen.map(product => (
        <div className="col-lg-4 col-sm-6">
          <div className="product-item">
            <div className="pi-pic">
              <img src={product.logo} alt="" />
              <div
                className="pi-links"
                // onClick={() => this.props.addProduct(product)}
              >
                <Link to="/product/women" className="add-card">
                  <i className="flaticon-bag" />
                  <span>ADD TO CART</span>
                </Link>
                <Link to="#" className="wishlist-btn">
                  <i className="flaticon-heart" />
                </Link>
              </div>
            </div>
            <div className="pi-text">
              <h6>{product.price}</h6>
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
      item =  null;
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
                      <a href="#">Sữa rửa mặt</a>
                    </li>
                    <li>
                      <a href="#">Sữa tắm</a>
                    </li>
                    <li>
                      <a href="#">Kem làm trắng da</a>
                    </li>
                    <li>
                      <a href="#">Kem dưỡng da</a>
                    </li>
                  </ul>
                </div>
                <div className="filter-widget mb-0">
                  <h2 className="fw-title">refine by</h2>
                  <div className="price-range-wrap">
                    {/* <h4>Price</h4>
                    <div
                      className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min="10"
                      data-max="270"
                    >
                      <div
                        className="ui-slider-range ui-corner-all ui-widget-header"
                        style={{ left: '0%', width: '100%' }}
                      /> */}
                    {/* <span
                        tabindex="0"
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: '0%' }}
                      /> */}
                    {/* <span
                        tabindex="0"
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: '100%' }}
                      /> */}
                    {/* </div> */}
                    {/* <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div> */}
                  </div>
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
                  {/* <div className="product-item">
                      <div className="pi-pic">
                        <div className="tag-sale">ON SALE</div>
                        <img src="/img/product/6.jpg" alt="" />
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
                        <h6>$35,00</h6>
                        <p>Black and White Stripes Dress</p>
                      </div>
                    </div> */}
                  {item}
                  <div className="text-center w-100 pt-3">
                    {/* <button className="site-btn sb-line sb-dark">
                      LOAD MORE
                    </button> */}
                    <Pagination defaultActivePage={1} totalPages={10} onPageChange={this.onPageChangeHandle} />
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
  { getWomenProduct, addProduct }
)(WomenProduct);
