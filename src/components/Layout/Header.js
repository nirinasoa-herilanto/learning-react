import React from 'react';
import styles from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

import Button from '../UI/Button';
import { useAuthStore } from '../../store/auth/auth-context';
import AppAuthCore from '../../services/auth/app.auth';
import { auth, provider } from '../../config/firebase.config';

const Header = (props) => {
  const { user } = useAuthStore();

  const appAuthCore = new AppAuthCore(auth, provider);

  console.log(appAuthCore.user);

  const clickHandler = async () => {
    await appAuthCore.loggedInWithGoogle();
  };

  const loggoutHandler = async () => {
    await appAuthCore.loggout();
  };

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>

        <div>
          <HeaderCartButton onClick={props.onShowCart} />
          {!user && <Button onClick={clickHandler}>Sign in</Button>}

          {user && <Button onClick={loggoutHandler}>log out</Button>}
        </div>
      </header>

      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
