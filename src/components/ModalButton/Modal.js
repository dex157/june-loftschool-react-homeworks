import { Component } from 'react';
import * as ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    const { children, isModalShow } = this.props;

    return isModalShow
      ? ReactDOM.createPortal(children, document.getElementById('portal'))
      : null;
  }
}

export default Modal;
