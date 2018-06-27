import React, { Component } from 'react';
import './ModalButton.css';

class ModalButton extends Component {
  componentDidMount() {
    console.log('DidMount - ModalButton');
  }
  render() {
    return <button>Show modal!</button>;
  }
}

export default ModalButton;
