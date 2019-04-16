import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {combineReducers, applyMiddleware, createStore} from 'redux'
import Routers from './components/Routers';
import systemReducer, { getSystemState } from './redux/system';
import thunk from 'redux-thunk';
import {connect, Provider} from 'react-redux'; 
import userReducer from './redux/user';
import productReducer from './redux/product';
import cartReducer from './redux/cart';
const allReducer = combineReducers({
  system: systemReducer,
  user: userReducer,
  product: productReducer,
  cart: cartReducer
})
const localJSON = JSON.parse(window.localStorage.getItem('state'));
const initStore = localJSON ? localJSON : {};
const store = createStore(
  allReducer,
  initStore,
  applyMiddleware(thunk)
)

store.dispatch(getSystemState());
store.subscribe(() => {
  const state = store.getState();
  const persit = {
    cart: state.cart
  }
  window.localStorage.setItem('state', JSON.stringify(persit));
})

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routers system={this.props.system}/>
      </BrowserRouter>
    );
  }
};

const mapStateToProps = state => ({
  system: state.system
});

const Main = connect(mapStateToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);


