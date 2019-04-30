import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../redux/product';
import ImageReader from './ImageReader';
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: '',
        price: 0,
        amount: 0,
        information: '',
        ingredient: '',
        brand: 'Sakura',
        category: '',
        sex: 'Female',
        logo: ''
      }
    };
  }

  uploadLogo = logoURL => {
    this.setState({
      product: {
        ...this.state.product,
        logo: logoURL
      }
    });
  };

  handleChangeInput = e => {
    const field = e.target.name;
    const valueField = e.target.value;
    this.setState({
      product: {
        ...this.state.product,
        [field]: valueField
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addProduct(this.state.product);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Product</h5>
                <div>
                  <div className="form-group">
                    <label for="name">Name</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      id="name"
                      name="name"
                      value={this.state.product.name}
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label for="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      className="form-control"
                      value={this.state.product.price}
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label for="amount">Amount</label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      className="form-control"
                      value={this.state.product.amount}
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label for="name">Information</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      id="information"
                      name="information"
                      value={this.state.product.information}
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label for="name">Ingredient</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      id="ingredient"
                      name="ingredient"
                      value={this.state.product.ingredient}
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label for="sex">Sex</label>
                    <select
                      class="form-control"
                      id="sex"
                      name="sex"
                      value={this.state.product.sex}
                      onChange={this.handleChangeInput}
                    >
                      <option>Female</option>
                      <option>Male</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="category">Category</label>
                    <select
                      class="form-control"
                      id="category"
                      name="category"
                      value={this.state.product.category}
                      onChange={this.handleChangeInput}
                    >
                      <option>Dưỡng ẩm</option>
                      <option>Dưỡng trắng</option>
                      <option>Mặt nạ</option>
                      <option>Chống nắng</option>
                      <option>Trị mụn</option>
                      <option>Xịt khoáng</option>
                      <option>Sữa tắm</option>
                      <option>Dưỡng thể</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="email">Picture</label>
                    <ImageReader
                      action={{ changeLogo: this.uploadLogo }}
                      defaultValue={this.state.product.logo}
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Brand</label>
                    <select
                      class="form-control"
                      id="brand"
                      name="brand"
                      className="form-control"
                      value={this.state.product.brand}
                      onChange={this.handleChangeInput}
                    >
                      <option>Sakura</option>
                      <option>Clinque</option>
                      <option>Neostrata</option>
                      <option>Paula</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return state.product;
// };

export default connect(
  null,
  { addProduct }
)(AddProduct);
