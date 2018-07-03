import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    const { onCloseClick } = this.props;
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h1>Модальное окно!</h1>
            <button onClick={onCloseClick}>Close</button>
          </div>
        </div>
      </div>,
      document.getElementById('portal')
    );
  }
}

export default Modal;
