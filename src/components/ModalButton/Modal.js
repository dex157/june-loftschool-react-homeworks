import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    if (this.props.visible) {
      return ReactDOM.createPortal(
        this.props.children,
        document.querySelector('#portal')
      );
    } else {
      return null;
    }
  }
}

export default Modal;
