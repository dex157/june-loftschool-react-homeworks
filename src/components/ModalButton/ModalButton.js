import React, { Component, Fragment } from 'react';
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
    return (
      <Fragment>
        <button onClick={this.showModal}>Show modal!</button>
        {this.state.isModalShow ? (
          <Modal domNode={document.querySelector('#portal')}>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <h1>Modal!</h1>
                  <button onClick={this.hideModal}>Close</button>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </Fragment>
    );
  }
}

export default ModalButton;
