import React from 'react';
import { Link } from 'react-router-dom';

const CategoryMenu = () => {
  return (
    <ul className="category-menu">
      <li>
        <Link
          to={{
            pathname: '/product/category/duong am'
          }}
        >
          Chăm sóc da mặt
        </Link>
        <ul class="sub-menu">
          <li>
            <Link
              to={{
                pathname: `/product/category/duong am`
              }}
            >
              Dưỡng ẩm
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/product/category/duong trang`
              }}
            >
              Dưỡng trắng
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/product/category/mat na`
              }}
            >
              Mặt nạ
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/product/category/chong nang`
              }}
            >
              Chống nắng
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/product/category/tri mun`
              }}
            >
              Trị mụn
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/product/category/xit khoang`
              }}
            >
              Xịt khoáng
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/product/women">Chăm sóc cơ thể</Link>
        <ul class="sub-menu">
          <Link
            to={{
              pathname: `/product/category/sua tam`
            }}
          >
            Sữa tắm
          </Link>
          <Link
            to={{
              pathname: `/product/category/duong the`
            }}
          >
            Dưỡng thể
          </Link>
        </ul>
      </li>
    </ul>
  );
};

export default CategoryMenu;