import { Component } from 'react';
import * as ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(this.props.children, this.props.domNode);
  }
}

export default Modal;
