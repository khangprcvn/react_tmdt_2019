import React from 'react';
import 'bootstrap';
import axios from 'axios';
// import { connect } from 'react-redux';

class ListOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  async componentDidMount() {
    const url = '/admin/products/order';
    const response = await axios.get(url, {});
    this.setState({
      orders: response.data
    });
  }

  render() {
    let item;
    if (this.state.orders.length === 0) {
      item = <h2>Loading...</h2>;
    }
    let totalProduct = 0,
      totalPrice = 0;
    this.state.orders.map(order => {
      order.list.map(item => {
        totalProduct += item.quantity;
        totalPrice +=
          item.price * item.quantity -
          (item.sale / 100) * item.price * item.quantity;
      });
    });
    item = this.state.orders.map(order => (
      <div className="panel-body" key={order._id}>
        <table className="table table-striped table-bordered table-list">
          <thead>
            <tr>
              <th>
                <em className="fa fa-cog" />
              </th>
              <th>Tên</th>
              <th>Địa chỉ</th>
              <th>Số điện thoại</th>
              <th>Tổng sản phảm đã mua</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                &emsp;
                <button
                  className="btn btn-success"
                  // onClick={() => this.onDelete(product._id)}
                >
                  <em className="fa fa-list" />
                </button>
              </td>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>0{order.phone}</td>
              <td>{order.total}</td>
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
                    <h3 className="panel-title" style={{ padding: '20px' }}>
                      List Order
                    </h3>
                  </div>
                </div>
              </div>
              {/* {item} */}
              {item}
            </div>
            <div>
              <h3 className="panel-title" style={{ padding: '20px' }}>
                Tổng sản phẩm : {totalProduct} sản phẩm
              </h3>
              <h3 className="panel-title" style={{ padding: '20px' }}>
                Tổng tiền : {totalPrice} VNĐ
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListOrder;
