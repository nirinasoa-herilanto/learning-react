import React from 'react';
import MainNavigation from '../components/Layout/MainNavigation';

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error was occured.</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
