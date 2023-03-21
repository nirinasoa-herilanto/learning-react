import './Modal.css';
import React from 'react';

import Card from '../Card/Card';
import Overlay from '../Overlay/Overlay';

const Modal = (props) => {
  return (
    <div className="modal">
      <Card className="modal__content">{props.children}</Card>
      <Overlay className="modal__overlay" onHideOverlay={props.onClose} />
    </div>
  );
};

export default Modal;
