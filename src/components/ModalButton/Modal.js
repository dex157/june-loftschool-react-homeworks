import React from 'react';
// import ModalButton from './ModalButton'

const Modal = props => {
  if (props.visible) {
    return (
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h1>Hello world!</h1>
            {props.children}
            <div />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
