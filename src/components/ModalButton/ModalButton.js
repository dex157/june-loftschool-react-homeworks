import React, { Component, Fragment } from 'react';
import './ModalButton.css';
import Modal from './Modal';

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

  handleModalClick = () => {
    this.hideModal();
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.showModal}>Show modal!</button>
        {this.state.isModalShow && (
          <Modal handleClick={this.handleModalClick} />
        )}
      </Fragment>
    );
  }
}

export default ModalButton;
