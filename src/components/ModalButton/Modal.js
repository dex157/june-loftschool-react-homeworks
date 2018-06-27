import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ModalButton.css';

const portalRoot = document.getElementById('portal');
class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div', { name: 'modal' });
  }
  componentDidMount() {
    portalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h1>Модальное окно!</h1>
            <button id="close-modal-button">Close</button>
          </div>
        </div>
      </div>,
      this.el
    );
  }
}

export default Modal;
