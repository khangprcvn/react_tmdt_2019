import React from 'react';

class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  handleSearchInput = e => {
    this.setState({
      search: e.target.value
    })
  };

  handleSubmitSearch = e => {
    // e.preventDefault();
  }

  render() {
    return (
      <div className="col-xl-6 col-lg-5">
        <form className="header-search-form" onSubmit={this.handleSubmitSearch}>
          <input
            type="search"
            name="key"
            id="mySearch"
            placeholder="Tìm kiếm sản phẩm, thương hiệu, ..."
            onChange={this.handleSearchInput}
          />
          <button>
            <i className="flaticon-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchProduct;
