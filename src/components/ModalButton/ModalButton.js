import React, { Component } from 'react';
import './ModalButton.css';
import Modal from './Modal';

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
    const isModalShow = this.state.isModalShow;

    return (
      <div>
        <button onClick={this.showModal}>Show Modal!</button>
        {isModalShow && <Modal closeModal={this.hideModal} />}
      </div>
    );
  }
}

export default ModalButton;
