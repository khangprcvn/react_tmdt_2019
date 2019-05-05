import React from 'react';
import 'bootstrap';
import { getAllProduct, deleteProduct } from '../redux/product';
import { connect } from 'react-redux';
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.onCreate = this.onCreate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.props.getAllProduct();
  }

  onCreate() {
    this.props.history.push({ pathname: '/admin/products/add'});
  }

  onDelete(id) {
    if (confirm('Delete this product:')) {
      this.props.deleteProduct(id)
    } else {
      return;
    }
  }
  render() {
    let product = [
      {
        _id: '',
        name: '',
        price: 0,
        information: ''
      }
    ];
    if (this.props.product !== undefined) {
      product = this.props.product;
    }
    const item = product.map(product => (
      <div className="panel-body" key={product._id}>
        <table className="table table-striped table-bordered table-list">
          <thead>
            <tr>
              <th>
                <em className="fa fa-cog" />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                <button className="btn btn-success">
                  <em className="fa fa-edit" />
                </button>
                &emsp;
                <button
                  className="btn btn-danger"
                  onClick={() => this.onDelete(product._id)}
                >
                  <em className="fa fa-trash" />
                </button>
              </td>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.information}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
    return (
      <div className="container">
        <span />
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="panel panel-default panel-table">
              <div className="panel-heading">
                <div className="row">
                  <div className="col col-xs-6">
                    <h3 className="panel-title">List Product</h3>
                  </div>
                  <div className="col col-xs-6 text-right">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary btn-create"
                      onClick={this.onCreate}
                    >
                      Create New
                    </button>
                  </div>
                </div>
              </div>
              {item}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.product;
};

export default connect(
  mapStateToProps,
  { getAllProduct, deleteProduct }
)(Admin);

