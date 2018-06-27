import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput.js';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  handleChange = () => {};

  render() {
    return <CardNumberInput onChange={this.handleChange} />;
  }
}

export default CardNumberHolder;
