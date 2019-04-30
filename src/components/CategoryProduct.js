import React from 'react';
import { Link } from 'react-router-dom';
import 'jquery';
import axios from 'axios';
import Loading from './Loading';
// import loadjs from 'loadjs';
class CategoryProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
    this.handleDetailProduct = this.handleDetailProduct.bind(this);
  }

  componentDidMount() {
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
    console.log(this.state.product);
    let listItem;
    if (!this.state.product) {
      return listItem = <Loading />;
    } else {
      listItem = this.state.product.map((pro, index) => {
        return (
          <div
            class="col-lg-4 col-sm-6"
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => this.handleDetailProduct(pro._id)}
          >
            <div class="product-item">
              <div class="pi-pic">
                {/* <div class="tag-sale">ON SALE</div> */}
                <img src={pro.logo} alt="" />
                <div class="pi-links">
                  <a href="#" class="add-card">
                    <i class="flaticon-bag" />
                    <span>ADD TO CART</span>
                  </a>
                  <a href="#" class="wishlist-btn">
                    <i class="flaticon-heart" />
                  </a>
                </div>
              </div>
              <div class="pi-text">
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
    }
    return (
      <div>
        <div className="page-top-info">
          <div className="container">
            <h4>Thể loại</h4>
            <div className="site-pagination">
              <a href="">Home</a> /<a href="">Category</a>
            </div>
          </div>
        </div>
        <section class="category-section spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 order-2 order-lg-1">
                <div className="filter-widget">
                  <h2 className="fw-title">Categories</h2>
                  <ul className="category-menu">
                    <li>
                      <a href="#">Chăm sóc da mặt</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="#">Dưỡng ẩm</a>
                        </li>
                        <li>
                          <a href="#">Dưỡng trắng</a>
                        </li>
                        <li>
                          <a href="#">Mặt nạ</a>
                        </li>
                        <li>
                          <a href="#">Chống nắng</a>
                        </li>
                        <li>
                          <a href="#">Trị mụn</a>
                        </li>
                        <li>
                          <a href="#">Xịt khoáng</a>
                        </li>
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

export default CategoryProduct;
