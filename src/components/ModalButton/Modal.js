import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  hideModal = event => {
    const hideModal = this.props.onClick;
    hideModal();
  }
  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h1>Модальное окно!</h1>
            <button onClick={this.hideModal}>Close</button>
          </div>
        </div>
      </div>,

      document.getElementById('portal')
    );
  }
}

export default Modal;
