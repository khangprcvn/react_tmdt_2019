import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        picture: {
          dataPicture: null
        }
      }
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

  render() {
    if (!this.state.product) {
      return <Loading />
    }
    console.log(this.state.product);
    console.log(this.state.product.picture);
    return (
      <div>
        <div class="page-top-info">
          <div class="container">
            <h4>Product Detail</h4>
            <div class="site-pagination">
              <Link to="/">Home</Link> /<Link to="/product">Product</Link>
            </div>
          </div>
        </div>
        <section className="product-section">
          <div className="container">
            <div className="back-link">
              <Link to="/"> &lt;&lt; Back to Category</Link>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="product-pic-zoom">
                  <img className="product-big-img" src={this.state.product.picture.dataPicture} alt="" />
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
                  Available: <span>In Stock</span>
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
                  <p>Quantity</p>
                  <div className="pro-qty">
                    <input id="quantity" type="text" min="1" value={this.state.product.quantity} />
                  </div>
                </div>
                <button className="site-btn">SHOP NOW</button>
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
                        Information
                      </button>
                    </div>
                    <div
                      id="collapse1"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="panel-body">{this.state.product.information}</div>
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
                        Ingredient{' '}
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
                        <h4>Free Ship</h4>
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

export default ProductDetail;
