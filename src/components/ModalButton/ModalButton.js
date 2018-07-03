import React, { Component } from 'react';
import './ModalButton.css';
import Modal from './Modal';

class ModalButton extends Component {
  static displayName = 'ModalButton';
  state = {
    isModalShow: false
  };
  hideModal = event => {
    this.setState({ isModalShow: false });
  };
  showModal = event => {
    this.setState({ isModalShow: true });
  };
  render() {
    const { isModalShow } = this.state;

    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        {isModalShow && <Modal onClick={this.hideModal} />}
      </div>
    );
  }
}

export default ModalButton;
