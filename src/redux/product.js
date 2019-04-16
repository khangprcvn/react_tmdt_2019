import axios from 'axios';
const GET_PRODUCT = 'get_product';
const ADD_PRODUCT = 'add_product';
const DEL_PRODUCT = 'del_product';
const WOMEN_PRODUCT = 'women_product';
const TOP_SELLER = 'top_seller';
// action
export function getProductAction(data) {
  return {
    type: GET_PRODUCT,
    data
  }
}

export function addProductAction(data) {
  return {
    type: ADD_PRODUCT,
    data
  }
}

export function delProductAction(data) {
  return {
    type: DEL_PRODUCT,
    data
  }
}

export function womenProductAction(data) {
  return {
    type: WOMEN_PRODUCT,
    data
  }
}

export function sellerProductAction(data) {
  return {
    type: TOP_SELLER,
    data
  }
}



export function getAllProduct() {
  return dispatch => {
    const url = '/admin/product/getallproduct';
    axios.get(url, {}).then(result => {
      // console.log(result.data);
      dispatch(getProductAction(result.data))
    }).catch(err => {
      console.log(err);
    })
  }
}

export function addProduct(product) {
  return dispatch => {
    const url = "/admin/product/addproduct";
    axios.post(url, product, {}).then(result => {
      // console.log(result);
      dispatch(addProductAction(result.data))      
    }).catch(err => {
      console.log(err);
    })
  }
}

export function deleteProduct(id) {
  return dispatch => {
    const url = "/admin/product/deleteproduct"
    axios.post(url, {id}, {}).then(data => {
      // console.log(data);
      dispatch(delProductAction(id))
    }).catch(err => {
      console.log(err);
    })
  }
}

export const womenProduct = (pageSize, pageNumber) => async dispatch => {
  const url = `/product/getWomenProduct/${pageSize}/${pageNumber}`;
  const response = await axios.get(url, {});
  dispatch(womenProductAction(response.data))
}

// export function womenProduct() {
//   return dispatch => {
//     const url = "/product/getWomenProduct"
//     axios.get(url, {}).then(result => {
//       // console.log(data);
//       dispatch(womenProductAction(result.data))
//     }).catch(err => {
//       console.log(err);
//     })
//   }
// }


export function getSellerProduct() {
  return dispatch => {
    const url = "/product/getSellerProduct"
    axios.get(url, {}).then(result => {
      // console.log(result.data);
      dispatch(sellerProductAction(result.data))
    }).catch(err => {
      console.log(err);
    })
  }
}



export default function ProductReducer(state = {}, action) {
  console.log(action.type);
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.data
      }
    case ADD_PRODUCT: {
      return {
        ...state,
        product: [
          ...state.product,
          action.data
        ]
      }
    }
    case DEL_PRODUCT: {
      const newProduct = state.product.filter(item => {
        return item._id !== action.data;
      })
      return {
        ...state,
        product: newProduct
      }
    }
    case WOMEN_PRODUCT: {
      return {
        ...state,
        productWomen: action.data
      }
    }
    case TOP_SELLER: {
      return {
        ...state,
        sellerProduct: action.data
      }
    }
    default:
      return state;
  }
}