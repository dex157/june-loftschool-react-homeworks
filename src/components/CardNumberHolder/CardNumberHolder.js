import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  static displayName = 'Card number formating';

  handleChange = e => {
    this.setState({
      cardNumber: e.target.value
    });
  };

  render() {
    return (
      <CardNumberInput
        onChange={this.handleChange}
        cardNumber={this.state.cardNumber}
        value={this.state.cardNumber}
      />
    );
  }
}

export default CardNumberHolder;
