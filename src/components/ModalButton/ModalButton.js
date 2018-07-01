import React, { Component } from 'react';
import './ModalButton.css';
import Modal from './Modal';

class ModalButton extends Component {
  static displayName = 'ModalButton';

  constructor(props) {
    super(props);
    this.state = {
      isModalShow: false
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        {this.state.isModalShow && (
          <Modal domNode={document.getElementById('portal')}>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <p>It is modal window</p>
                  <button onClick={this.hideModal}>Close the modal</button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }

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
}

export default ModalButton;
