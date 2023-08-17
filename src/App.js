import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import RootLayout from './components/Layout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Wrapper
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
