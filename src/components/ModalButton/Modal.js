import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.querySelector('#portal')
    );
  }
}

export default Modal;
