import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  // ReactDOM.createPortal способ отображения дочерних элементов в узел DOM, который существует вне иерархии DOM родительского компонента.
  render() {
    // React не создаёт новый div. Он отрисовывает потомок в portal
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById('portal')
    );
  }
}

export default Modal;
