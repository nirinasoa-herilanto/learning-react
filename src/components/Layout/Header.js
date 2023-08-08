import React from 'react';
import styles from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';

import { useAuthStore } from '../../store/auth/auth-context';

import HeaderCartButton from './HeaderCartButton';
import Button from '../UI/Button';

const Header = (props) => {
  const { user, signingWithGoogleHandler, loggoutHandler } = useAuthStore();

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>

        <div>
          <HeaderCartButton onClick={props.onShowCart} />

          {!user && <Button onClick={signingWithGoogleHandler}>Sign in</Button>}
          {user && <Button onClick={loggoutHandler}>Log out</Button>}
        </div>
      </header>

      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
