import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const portalElement = document.getElementById('overlays');

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlays = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}

      {ReactDOM.createPortal(<Backdrop />, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
