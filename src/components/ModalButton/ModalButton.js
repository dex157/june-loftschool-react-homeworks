import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
  state = {
    isModalShow: false
  };

  static displayName = 'ModalButton';

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
      <Fragment>
        <button onClick={this.showModal}>Show modal!</button>
        {this.state.isModalShow && (
          <Modal domeNode={document.querySelector('#portal')}>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <h1>Модальное окно!</h1>
                  <button onClick={this.hideModal}>Close</button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </Fragment>
    );
  }
}

export default ModalButton;
