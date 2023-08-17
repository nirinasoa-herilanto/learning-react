import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>{`Product detail n°: ${params.productId}`}</h1>
    </>
  );
};

export default ProductDetailPage;
