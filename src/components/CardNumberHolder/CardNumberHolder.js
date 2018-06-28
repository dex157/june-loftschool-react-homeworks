import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput.js';

export default class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  static displayName = 'Card number formating';

  handleChange = value => {
    this.setState(state => ({
      cardNumber: value
    }));
  };

  render() {
    return (
      <CardNumberInput
        onChange={this.handleChange}
        cardNumber={this.state.cardNumber}
      />
    );
  }
}
