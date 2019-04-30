import React from 'react';
import { Link } from 'react-router-dom';
// import 'jquery';
import axios from 'axios';
import Loading from './Loading';
import loadjs from 'loadjs';
class CategoryProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
    this.handleDetailProduct = this.handleDetailProduct.bind(this);
  }

  componentDidMount() {
    loadjs('/js/main.js');
    const name = this.props.match.params.name;
    const url = `/products/category/${name}`;
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
                      <a href="#">Chăm sóc da mặt</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="/product/category/duong am">Dưỡng ẩm</a>
                        </li>
                        <li>
                          <a href="/product/category/duong trang">
                            Dưỡng trắng
                          </a>
                        </li>
                        <li>
                          <a href="/product/category/mat na">Mặt nạ</a>
                        </li>
                        <li>
                        <li>
                          <a href="/product/category/chong nang">Chống nắng</a>
                        </li>
                        </li>
                        {/* <li>
                          <a href="#">Trị mụn</a>
                        </li>
                        <li>
                          <a href="#">Xịt khoáng</a>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <a href="#">Chăm sóc cơ thể</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="#">Sữa tắm</a>
                        </li>
                        <li>
                          <a href="#">Dưỡng thể</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
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
                  {listItem}
                  {/* <div className="text-center w-100 pt-3">
                    {pageNumber < pageTotal && (
                      <button
                        className="site-btn sb-line sb-dark"
                        onClick={() => this.handleLoadPage(pageNumber + 1)}
                      >
                        Xem thêm
                      </button>
                    )}
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

export default CategoryProduct;
