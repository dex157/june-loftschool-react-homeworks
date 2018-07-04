import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    const { isModalShow, children } = this.props;

    if (isModalShow) {
      return ReactDOM.createPortal(children, document.getElementById('portal'));
    } else return null;
  }
}

export default Modal;
