import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './ModalButton.css';

export default class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.portalElement = document.createElement('div');
    this.portalElement.id = 'modal';
    document.body.appendChild(this.portalElement);
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  }

  render() {
    const { hideModal } = this.props;
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h1>Модальное окно</h1>
            <button onClick={hideModal}>Close</button>
          </div>
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
}
