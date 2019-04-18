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

export const womenProduct = (pageSize, pageNumber) => async dispatch => {
  const url = `/products/women/${pageSize}/${pageNumber}`;
  const response = await axios.get(url, {});
  dispatch(womenProductAction(response.data))
}

export const getSellerProduct = () => async dispatch => {
  const url = '/products/list/seller';
  const response = await axios.get(url, {});
  dispatch(sellerProductAction(response.data));
}

export default function ProductReducer(state = {}, action) {
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


