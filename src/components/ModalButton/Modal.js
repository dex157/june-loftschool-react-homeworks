import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    isModalShow: PropTypes.bool
  };

  render() {
    const { children, isModalShow } = this.props;

    return isModalShow
      ? createPortal(children, document.querySelector('#portal'))
      : null;
  }
}

export default Modal;
