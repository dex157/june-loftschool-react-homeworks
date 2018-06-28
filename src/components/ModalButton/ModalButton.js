import React, { Component, Fragment } from 'react';
import Modal from './Modal';

import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false
  };

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

  componentDidMount() {
    console.log('DidMount - ModalButton');
  }

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
