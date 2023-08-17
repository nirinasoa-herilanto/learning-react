import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <>
      <h1>Product lists</h1>

      <Link to={'/products/1'}>Product 1</Link>
      <Link to={'/products/2'}>Product 2</Link>
      <Link to={'/products/3'}>Product 3</Link>
    </>
  );
};

export default ProductsPage;
