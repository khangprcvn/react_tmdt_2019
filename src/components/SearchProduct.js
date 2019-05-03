import React from 'react';

class SearchProduct extends React.Component {
  render() {
    return (
      <div className="col-xl-6 col-lg-5">
        <form className="header-search-form">
          <input type="text" placeholder="Tìm kiếm sản phẩm, thương hiệu, ..." />
          <button>
            <i className="flaticon-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchProduct;