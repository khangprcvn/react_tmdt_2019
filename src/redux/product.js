import axios from 'axios';

const GET_PRODUCT = 'get_product';
const ADD_PRODUCT = 'add_product';
const DEL_PRODUCT = 'del_product';
const UPDATE_PRODUCT_PAGE = 'updateProductPage';
const LOAD_MORE_PRODUCT_IN_PAGE = 'loadMoreProductInPage';
const TOP_SELLER = 'top_seller';
const WOMEN_PRODUCT = 'women_product';



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
export function updateProductPageAction(
  list,
  pageNumber,
  pageSize,
  pageTotal,
  totalItem
) {
  return {
    type: UPDATE_PRODUCT_PAGE,
    data: {
      list,
      pageNumber,
      pageSize,
      pageTotal,
      totalItem
    }
  }
}
export function loadMoreProductAction(list, pageNumber, pageSize, pageTotal, totalItem) {
  return {
    type: LOAD_MORE_PRODUCT_IN_PAGE,
    data: {
      list,
      pageNumber,
      pageSize,
      pageTotal,
      totalItem
    }
  }
}

// Thunk
export const getAllProduct = () => async dispatch => {
  const url = '/admin/products';
  const response = await axios.get(url, {});
  dispatch(getProductAction(response.data))
}

export const deleteProduct = id => async dispatch => {
  const url = `/admin/products/${id}`;
  const response = await axios.delete(url, {});
  dispatch(delProductAction(id))
}

export const addProduct = product => async dispatch => {
  const url = '/admin/products';
  const response = await axios.post(url, product, {});
  dispatch(addProductAction(response.data));
}

// export const getWomenProduct = (pageSize, pageNumber) => async dispatch => {
//   const url = `/products/women/${pageSize}/${pageNumber}`;
//   const response = await axios.get(url, {});
//   dispatch(womenProductAction(response.data))
// }

export const getSellerProduct = () => async dispatch => {
  const url = '/products/list/seller';
  const response = await axios.get(url, {});
  dispatch(sellerProductAction(response.data));
}

// export const getProductPage = (pageSize, pageNumber, done) => async dispatch => {
//   const url = `/products/women/${pageSize}/${pageNumber}`;
//   const response = await axios.get(url, {});
//   let { list, pageNumber, pageSize, totalItem } = response.data;
//   // console.log(list, pageNumber, pageSize, totalItem);
//   console.log(response);
//   // dispatch(updateProductPageAction([], pageNumber, pageSize, 0, 0));
// }

export function getProductPage(pageSize, pageNumber, done) {
  return dispatch => {
    const url = `/products/women/${pageSize}/${pageNumber}`;
    axios.get(url, {}).then(response => {
      let {
        list,
        pageNumber,
        pageSize,
        totalItem
      } = response.data.data;
      dispatch(
        updateProductPageAction(
          list,
          pageNumber,
          pageSize,
          Math.ceil(totalItem / pageSize),
          totalItem
        )
      );
    }).catch(error => {
      dispatch(updateProductPageAction([], pageNumber, pageSize, 0, 0));
    })
  }
}

export function loadMoreProduct(pageSize, pageNumber, done) {
  return dispatch => {
    const url = `/products/women/${pageSize}/${pageNumber}`;
    axios.get(url, {}).then(response => {
      let {
        list,
        pageNumber,
        pageSize,
        totalItem
      } = response.data.data;
      dispatch(
        loadMoreProductAction(
          list,
          pageNumber,
          pageSize,
          Math.ceil(totalItem / pageSize),
          totalItem
        )
      );
    }).catch(error => {
      dispatch(loadMoreProductAction([], pageNumber, pageSize, 0, 0));
    })
  }
}

// export const loadMoreProduct = (pageNumber, pageSize, done) => dispatch => {
//   const url = `products/women/${pageNumber}/${pageSize}`;

// }


// Reducer
export default function ProductReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.data
      }
    case ADD_PRODUCT:
      {
        return {
          ...state,
          product: [
            ...state.product,
            action.data
          ]
        }
      }
    case DEL_PRODUCT:
      {
        const newProduct = state.product.filter(item => {
          return item._id !== action.data;
        })
        return {
          ...state,
          product: newProduct
        }
      }
      // case WOMEN_PRODUCT:
      //   {
      //     return {
      //       ...state,
      //       productWomen: action.data
      //     }
      //   }
    case UPDATE_PRODUCT_PAGE:
      {
        return {
          ...state,
          productWomen: action.data
        }
      }
      case LOAD_MORE_PRODUCT_IN_PAGE: {
        return {
          ...state,
          productWomen: {
            ...action.data,
            list: state.productWomen.list.concat(action.data.list)
          }
        }
      }
    case TOP_SELLER:
      {
        return {
          ...state,
          sellerProduct: action.data
        }
      }
    default:
      return state;
  }
}