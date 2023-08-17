import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.css';

import MainNavigation from './MainNavigation';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
