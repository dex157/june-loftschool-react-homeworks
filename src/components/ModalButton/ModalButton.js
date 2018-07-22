import React, { Component, Fragment } from 'react';
import './ModalButton.css';
import Modal from './Modal.js';

class ModalButton extends Component {
  state = {
    isModalShow: false
  };
  hideModal = () => {
    this.setState({ isModalShow: false });
  };
  showModal = () => {
    this.setState({ isModalShow: true });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.showModal}>Show Me</button>
        <Modal visible={this.state.isModalShow}>
          <button onClick={this.hideModal}>Hide Me</button>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalButton;
