import { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class Modal extends PureComponent {
  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, document.getElementById('portal'));
  }
}

export default Modal;
