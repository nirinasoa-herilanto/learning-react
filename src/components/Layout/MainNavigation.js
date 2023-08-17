import React from 'react';
import styles from './MainNavigation.module.css';

import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
