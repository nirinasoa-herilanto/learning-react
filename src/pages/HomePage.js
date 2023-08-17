import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to={'/products'}>Go to the products</Link>
    </div>
  );
};

export default HomePage;
