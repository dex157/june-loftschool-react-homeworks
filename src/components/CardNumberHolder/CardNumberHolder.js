import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  handleChange = value => {
    this.setState({ cardNumber: value });
  };

  static displayName = 'Card number formating';

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
