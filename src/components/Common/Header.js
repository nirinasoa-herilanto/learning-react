import './Header.css';
import React from 'react';

import { headerWording } from './header.wording';

const Header = (props) => {
  return (
    <header>
      <img src={props.imageUrl} alt="Medal badge with a star" />
      <h1>{headerWording.title}</h1>
      <p>{headerWording.description}</p>
    </header>
  );
};

export default Header;
