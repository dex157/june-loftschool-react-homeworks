import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  handleClick = () => {
    this.props.hideModal();
  };

  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h1>Модальное окно!</h1>
            <button onClick={this.handleClick}>Close</button>
          </div>
        </div>
      </div>,
      document.getElementById('portal')
    );
  }
}

export default Modal;
