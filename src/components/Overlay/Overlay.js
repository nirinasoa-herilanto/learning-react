import './Overlay.css';
import React from 'react';

const Overlay = (props) => {
  return (
    <div
      className={`overlay ${props.className || ''}`}
      onClick={props.onHideOverlay}
    ></div>
  );
};

export default Overlay;
