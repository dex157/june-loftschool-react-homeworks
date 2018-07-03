import React, { Component } from 'react';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false
  };

  hideModal = () => {
    this.setState(state => ({
      isModalShow: false
    }));
  };

  showModal = () => {
    this.setState(state => ({
      isModalShow: true
    }));
  };

  render() {
    return !this.state.isModalShow ? (
      <button onClick={this.showModal}>Show modal</button>
    ) : (
      <Modal onClick={this.hideModal} />
    );
  }
}

export default ModalButton;
