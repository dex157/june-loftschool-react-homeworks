import React, { Component } from 'react';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false
  };

  showModal = () => {
    this.setState({
      isModalShow: true
    });
  };

  hideModal = () => {
    this.setState({
      isModalShow: false
    });
  };

  render() {
    return this.state.isModalShow ? <Modal /> : null;
  }
}

export default ModalButton;
