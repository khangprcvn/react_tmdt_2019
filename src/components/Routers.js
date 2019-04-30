import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';
import { Switch, Route } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import Footer from './Footer';
const HomePage = Loadable({loading: Loading, loader: () => import('./HomePage')}),
  LoginPage = Loadable({ loading: Loading, loader: () => import('./Login') }),
  SignUp = Loadable({ loading: Loading, loader: () => import('./Signup') }),
  AdminPage = Loadable({ loading: Loading, loader: () => import('./Admin') }),
  AddProduct = Loadable({ loading: Loading, loader: () => import('./AddProduct')}),
  WomenProduct = Loadable({ loading: Loading, loader: () => import('./WomenProduct')}),
  BrandProduct = Loadable( { loading: Loading, loader: () => import('./BrandProduct')}),
  CartPage = Loadable({ loading: Loading, loader: () => import('./Cart')}),
  CheckoutPage = Loadable({ loading: Loading, loader: () => import('./Checkout')}),
  ProductDetailPage = Loadable({ loading: Loading, loader: () => import('./ProductDetail')}),
  CategoryProduct = Loadable({ loading: Loading, loader: () => import('./CategoryProduct')});


const routes = [
  { view: 'user', path: '/', component: HomePage, exact: true },
  { view: 'user', path: '/login', component: LoginPage, exact: true },
  { view: 'user', path: '/signup', component: SignUp, exact: true },
  { view: 'user', path: '/product/women', component: WomenProduct, exact: true},
  { view: 'user', path: '/product/brand/:id', component: BrandProduct, exact: true},
  { view: 'user', path: '/product/category/:name', component: CategoryProduct, exact: true},
  { view: 'user', path: '/product/cart', component: CartPage, exact: true},
  { view: 'user', path: '/product/checkout', component: CheckoutPage, exact: true},
  { view: 'user', path: '/product/detail/:id', component: ProductDetailPage, exact: true},
  { view: 'user', path: '/product/men', component: WomenProduct, exact: true},

  
  { view: 'admin', path: '/admin', component: AdminPage, exact: true },
  { view: 'admin', path: '/admin/products/add', component: AddProduct, exact: true}
];

const switches = (
  <Switch>
    {routes.map((route, index) => (
      <Route key={index} {...route} />
    ))}
  </Switch>
);

export default class Router extends React.Component {
  render() {
    return (
      <main>
        <HomeHeader user={this.props.system ? this.props.system.user : null} />
        <div>{switches}</div>
        <Footer />
      </main>
    );
  }
}
