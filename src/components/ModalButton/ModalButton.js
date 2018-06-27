import React, { Component } from 'react';
import Modal from './Modal.js';
import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false
  };
  static displayName = 'ModalButton';
  render() {
    return (
      <div onClick={this.hideModal}>
        <button onClick={this.showModal}>Show modal!</button>
        {this.state.isModalShow && <Modal />}
      </div>
    );
  }

  hideModal = event => {
    if (!event || event.target.id === 'close-modal-button')
      this.setState({ isModalShow: false });
  };

  showModal = () => {
    this.setState(state => ({ isModalShow: true }));
    this.setState({ isModalShow: true });
  };
}

export default ModalButton;
