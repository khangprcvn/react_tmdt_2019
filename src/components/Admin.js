// import React from 'react';
// import 'bootstrap';
// import { getAllProduct, deleteProduct } from '../redux/product';
// import { connect } from 'react-redux';
// class Admin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onCreate = this.onCreate.bind(this);
//     this.onDelete = this.onDelete.bind(this);
//   }

//   componentDidMount() {
//     this.props.getAllProduct();
//   }

//   onCreate() {
//     this.props.history.push({ pathname: '/admin/product/addproduct'});
//   }

//   onDelete(id) {
//     if (confirm('Delete this product:')) {
//       this.props.deleteProduct(id)
//     } else {
//       return;
//     }
//   }
//   render() {
//     let product = [
//       {
//         _id: '',
//         name: '',
//         price: 0,
//         information: ''
//       }
//     ];
//     // console.log('k', this.props.product);
//     if (this.props.product !== undefined) {
//       product = this.props.product;
//     }
//     const item = product.map(product => (
//       <div className="panel-body" key={product._id}>
//         <table className="table table-striped table-bordered table-list">
//           <thead>
//             <tr>
//               <th>
//                 <em className="fa fa-cog" />
//               </th>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Information</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td align="left">
//                 <button className="btn btn-success">
//                   <em className="fa fa-edit" />
//                 </button>
//                 &emsp;
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => this.onDelete(product._id)}
//                 >
//                   <em className="fa fa-trash" />
//                 </button>
//               </td>
//               <td>{product._id}</td>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//               <td>{product.information}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     ));
//     return (
//       <div className="container">
//         <span />
//         <div className="row">
//           {/* <p>
//             A simple example of how-to put a bordered table within a panel.
//             Responsive, place holders in header/footer for buttons or
//             pagination.
//           </p> */}
//           <div className="col-md-10 col-md-offset-1">
//             <div className="panel panel-default panel-table">
//               <div className="panel-heading">
//                 <div className="row">
//                   <div className="col col-xs-6">
//                     <h3 className="panel-title">List Product</h3>
//                   </div>
//                   <div className="col col-xs-6 text-right">
//                     <button
//                       type="button"
//                       className="btn btn-sm btn-primary btn-create"
//                       onClick={this.onCreate}
//                     >
//                       Create New
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {item}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return state.product;
// };

// export default connect(
//   mapStateToProps,
//   { getAllProduct, deleteProduct }
// )(Admin);

import React from 'react';
import { Header, Image, Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getAllProduct, deleteProduct } from '../redux/product';


class Admin extends React.Component {
  componentDidMount() {
    this.props.getAllProduct();
  }
  render() {
    return (
      <div className="container">
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employee</Table.HeaderCell>
              <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                    rounded
                    size="large"
                  />
                  <Header.Content>
                    Lena
                    <Header.Subheader>Human Resources</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>22</Table.Cell>
              <Button positive>Edit</Button>
              <Button negative>Delete</Button>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
                    rounded
                    size="large"
                  />
                  <Header.Content>
                    Matthew
                    <Header.Subheader>Fabric Design</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>15</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
                    rounded
                    size="large"
                  />
                  <Header.Content>
                    Lindsay
                    <Header.Subheader>Entertainment</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>12</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/mark.png"
                    rounded
                    size="large"
                  />
                  <Header.Content>
                    Mark
                    <Header.Subheader>Executive</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>11</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listProduct: state.product
  }
};

export default connect(mapStateToProps, {getAllProduct})(Admin);
