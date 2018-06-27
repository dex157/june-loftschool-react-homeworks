import React, { Component } from 'react';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false
  };
  static displayName = 'ModalButton';

  hideModal = () => {
    this.setState({
      isModalShow: false
    });
  };

  showModal = () => {
    this.setState({
      isModalShow: true
    });
  };

  render() {
    const { isModalShow } = this.state;
    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        {isModalShow && <Modal onCloseClick={this.hideModal} />}
      </div>
    );
  }
}

export default ModalButton;
