import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h1>Модальное окно!</h1>
            <button onClick={this.props.onClick}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
