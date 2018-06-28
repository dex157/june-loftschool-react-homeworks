import React, { Component } from 'react';

import './ModalButton.css';

import ReactDOM from 'react-dom';
class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <ModalChild {...this.props} />,
      document.getElementById('portal')
    );
  }
}

class ModalChild extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h1>Модальное окно!</h1>
            <button onClick={this.props.handleClick}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
