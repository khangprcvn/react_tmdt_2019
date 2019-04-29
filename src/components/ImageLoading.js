import React, { Component } from 'react';

import '../css/ImageLoading.css';

class ImageLoading extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loader" />
      </div>
    );
  }
}

export default ImageLoading;
