import React, { Component } from 'react';
import Modal from './Modal.js';
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
    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        {this.state.isModalShow && <Modal hideModal={this.hideModal} />}
      </div>
    );
  }
}

export default ModalButton;
