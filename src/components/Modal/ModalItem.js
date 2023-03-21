import './ModalItem.css';
import React from 'react';

const ModalItem = (props) => {
  return (
    <div className="modal-item">
      <h1 className="modal-item__name">
        Ooops, an error was occured during the process!
      </h1>
      <p className="modal-item__info">
        {props.warningMessage.length !== 0 && props.warningMessage}
      </p>
      <button
        className="modal-item__btn"
        type="button"
        onClick={props.onCloseModal}
      >
        Okay
      </button>
    </div>
  );
};

export default ModalItem;
