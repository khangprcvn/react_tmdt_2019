import React from 'react';
import { Link } from 'react-router-dom';

const BrandCategoryMenu = () => {
  return (
    <div>
      <h2 className="fw-title">Brand</h2>
      <ul className="category-menu">
        <li>
          <Link to="/product/brand/sakura">Sakura</Link>
        </li>
        <li>
          <Link to="/product/brand/paula">Paula</Link>
        </li>
        <li>
          <Link to="/product/brand/clinque">Clinque</Link>
        </li>
        <li>
          <Link to="/product/brand/neoStrata">NeoStrata</Link>
        </li>
      </ul>
    </div>
  );
};

export default BrandCategoryMenu;
