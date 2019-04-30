import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
class BrandProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
    this.handleDetailProduct = this.handleDetailProduct.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const url = `/products/brand/${id}`;
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
  handleDetailProduct(id) {
    this.props.history.push(`/product/detail/${id}`);
  }
  render() {
    // console.log(this.state.product);
    let listItem;
    if (this.state.product) {
      listItem = this.state.product.map((pro, index) => {
        return (
          <div
            className="col-lg-4 col-sm-4"
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => this.handleDetailProduct(pro._id)}
          >
            <div className="product-item">
              <div className="pi-pic">
                <img src={pro.logo} alt="" style={{ marginTop: '20px' }} />
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
                <h6>{pro.price / 1000}.000đ</h6>
                <Link
                  to={{
                    pathname: `/product/detail/${pro._id}`
                  }}
                >
                  {pro.name}
                </Link>
              </div>
            </div>
          </div>
        );
      });
    } else {
      listItem = <Loading />;
    }
    return (
      <div>
        <div className="page-top-info">
          <div className="container">
            <h4>Brand Page</h4>
            <div className="site-pagination">
              <a href="">Home</a> /<a href="">Brand</a>
            </div>
          </div>
        </div>
        <section class="category-section spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 order-2 order-lg-1">
                <div class="filter-widget">
                  <h2 class="fw-title">Brand</h2>
                  <ul class="category-menu">
                    <li>
                      <a href="/product/brand/sakura">Sakura</a>
                    </li>
                    <li>
                      <a href="/product/brand/paula">Paula</a>
                    </li>
                    <li>
                      <a href="/product/brand/clinque">Clinque</a>
                    </li>
                    <li>
                      <a href="/product/brand/neostrata">Neostrata</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
                <div class="row">
                  {listItem}
                  {/* <div class="text-center w-100 pt-3">
                    <button class="site-btn sb-line sb-dark">LOAD MORE</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BrandProduct;
