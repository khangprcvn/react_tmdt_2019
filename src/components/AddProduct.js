import React, { Component } from 'react';
import '../css/login.css';
import '../css/bootstrap.min.css';
import { connect } from 'react-redux';
import { addProduct } from '../redux/product';
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
        brand: '',
        sex: true // (male)
      },
      selectFile: null
    };
  }
  handleChangeName = e => {
    this.setState({
      product: {
        ...this.state.product,
        name: e.target.value
      }
    });
  };

  handleChangePrice = e => {
    this.setState({
      product: {
        ...this.state.product,
        price: e.target.value
      }
    });
  };

  handleChangeAmount = e => {
    this.setState({
      product: {
        ...this.state.product,
        amount: e.target.value
      }
    });
  };

  handleChangeInformation = e => {
    this.setState({
      product: {
        ...this.state.product,
        information: e.target.value
      }
    });
  };

  handleChangeIngredient = e => {
    this.setState({
      product: {
        ...this.state.product,
        ingredient: e.target.value
      }
    });
  };

  handleChangeBrand = e => {
    this.setState({
      product: {
        ...this.state.product,
        brand: e.target.value
      }
    });
  };

  handleChangeSex = e => {
    if (e.target.value === 'Female') {
      this.setState({
        product: {
          ...this.state.product,
          sex: false
        }
      });
    } else {
      this.setState({
        product: {
          ...this.state.product,
          sex: true
        }
      });
    }
  };

  handleChangePicture = e => {
    this.setState({
      selectFile: e.target.files[0]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // let changes = new FormData();
    const data = new FormData();
    data.append('name', this.state.product.name);
    data.append('price', this.state.product.price);
    data.append('amount', this.state.product.amount);
    data.append('information', this.state.product.information);
    data.append('ingredient', this.state.product.ingredient);
    data.append('brand', this.state.product.brand);
    data.append('sex', this.state.product.sex);
    data.append('file', this.state.selectFile);
    this.props.addProduct(data);
    this.props.history.push({ pathname: '/admin/' });
    // console.log(this.state.product);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Product</h5>
                <form
                  className="form-signin"
                  // enctype="multipart/form-data"
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputName"
                      className="form-control"
                      placeholder="Username"
                      name="name"
                      onChange={this.handleChangeName}
                      required
                      autoFocus
                    />
                    <label htmlFor="inputUser">Name</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputPrice"
                      className="form-control"
                      placeholder="Price"
                      name="price"
                      onChange={this.handleChangePrice}
                      required
                    />
                    <label htmlFor="inputEmail">Price</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputPrice"
                      className="form-control"
                      placeholder="Price"
                      name="amount"
                      onChange={this.handleChangeAmount}
                      required
                    />
                    <label htmlFor="inputEmail">Amount</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputInformation"
                      className="form-control"
                      placeholder="information"
                      name="information"
                      onChange={this.handleChangeInformation}
                      required
                    />
                    <label htmlFor="inputUser">Information</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputIngredient"
                      className="form-control"
                      placeholder="information"
                      name="information"
                      onChange={this.handleChangeIngredient}
                      required
                    />
                    <label htmlFor="inputUser">Ingredient</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputIngredient"
                      className="form-control"
                      placeholder="Ingredient"
                      name="ingredient"
                      onChange={this.handleChangeBrand}
                      required
                    />
                    <label htmlFor="inputUser">Brand</label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputUser">Select sex</label>
                    <select
                      className="form-control"
                      id="inputSex"
                      style={{ borderRadius: '50px' }}
                      onChange={this.handleChangeSex}
                      required
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="file"
                      id="picture"
                      className="form-control"
                      name="file"
                      onChange={this.handleChangePicture}
                      required
                    />
                    <label htmlFor="picture">Picture</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Save
                  </button>
                  <hr className="my-4" />
                </form>
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
