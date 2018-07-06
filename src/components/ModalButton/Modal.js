import {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component {
   render() {
      return ReactDOM.createPortal(
         this.props.children,
         document.querySelector('#portal')
      );
   }
}
