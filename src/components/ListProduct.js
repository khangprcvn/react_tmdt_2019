import React from 'react';
import { Link } from 'react-router-dom';

const ListProduct = ({
  product,
  clickCart,
  clickFavorite,
  clickDetailProduct,
  pathname
}) => {
  return (
    <div
      className="col-lg-4 col-sm-4"
      key={product._id}
      style={{ cursor: 'pointer' }}
    >
      <div className="product-item">
        <div className="pi-pic">
          {product.sale > 0 ? (
            <div className="tag-sale"> - {product.sale} %</div>
          ) : null}
          <img
            src={product.logo}
            alt=""
            style={{ marginTop: '20px' }}
            onClick={() => clickDetailProduct(product._id)}
          />
          <div className="pi-links">
            <Link
              to={pathname}
              className="add-card"
              onClick={() => clickCart(product)}
            >
              <i className="flaticon-bag" />
              <span>ADD TO CART</span>
            </Link>
            <Link
              to={pathname}
              className="wishlist-btn"
              onClick={clickFavorite}
            >
              <i className="flaticon-heart" />
            </Link>
          </div>
        </div>
        <div className="pi-text">
          <h6>{product.price / 1000}.000đ</h6>
          <Link
            to={{
              pathname: `/product/detail/${product._id}`
            }}
          >
            {product.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
