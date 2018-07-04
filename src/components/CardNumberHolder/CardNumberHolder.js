import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  handleChange = val => {
    this.setState(() => ({
      cardNumber: val
    }));
  };
  render() {
    return (
      <CardNumberInput
        cardNumber={this.state.cardNumber}
        onChange={this.handleChange}
      />
    );
  }
}

export default CardNumberHolder;
