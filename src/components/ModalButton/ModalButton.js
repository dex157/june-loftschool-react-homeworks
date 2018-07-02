import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
  static displayName = 'ModalButton';

  state = {
    isModalShow: false
  };

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  hideModal = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    const { isModalShow } = this.state;
    return (
      <Fragment>
        <button onClick={this.showModal}>Show modal!</button>
        {isModalShow && <Modal hideModal={this.hideModal} />}
      </Fragment>
    );
  }
}

export default ModalButton;
