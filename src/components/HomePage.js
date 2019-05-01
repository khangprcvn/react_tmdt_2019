import React from 'react';
import FeatureSession from './FeatureSession';
import HotProduct from './HotProduct';
import TopSeller from './TopSeller';
import 'jquery';
import 'jquery-ui';
import 'owl.carousel';
import loadjs from 'loadjs';
class HomePage extends React.Component {
  componentDidMount() {
    loadjs('../js/bootstrap.min.js');
    loadjs('../js/jquery.nicescroll.min.js');
    loadjs('../js/jquery.slicknav.min.js');
    loadjs('../js/main.js');
  }
  render() {
    return (
      <React.Fragment>
        <FeatureSession />
        <HotProduct />
        {/* <TopSeller /> */}
      </React.Fragment>
    )
  }
}

export default HomePage;