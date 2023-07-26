import React from 'react';
import logo from '../../assets/investment-calculator-logo.png';

import style from './Header.module.css';

const Header = (props) => {
  return (
    <header className={`${style.header} ${props.className}`}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
