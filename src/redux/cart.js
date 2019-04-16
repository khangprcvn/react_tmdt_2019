export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

// Action
export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const changeQuantity = product => ({
  type: CHANGE_QUANTITY,
  payload: product
});



const initialState = {
  productCart: []
};


export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
    return {
      ...state,
      productCart: action.payload
    };
    case ADD_PRODUCT:
      return {
        ...state,
        // productCart: [
        //   ...state.productCart,
        //   {
        //     ...action.payload
        //   }
        // ],
        productToAdd: Object.assign({}, action.payload)
      };
    case REMOVE_PRODUCT:
      const newProductCart = state.productCart.filter(product => {
        return product._id !== action.payload;
      })
      return {
        ...state,
        productCart: newProductCart
      };
    case CHANGE_QUANTITY: {
      // let productChange = state.productCart[action.playload.index];
      let product = state.productCart;
      let indexChange = action.payload.index;
      let productChange = {
        ...product[indexChange],
        quantity: action.payload.newQuantity
      }
      let newProduct = [
        ...product.slice(0, indexChange),
        productChange,
        ...product.slice(indexChange + 1, product.length)
      ];
      // console.log(newProduct);
      return {
        ...state,
        productCart: newProduct
      }
    }
    default:
      return state;
  }
}