import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  static displayName = 'Card number formating';

  state = {
    cardNumber: ''
  };

  handleChange = event => {
    this.setState({ cardNumber: event.target.value });
  };

  render() {
    console.log(this.state.cardNumber);

    return (
      <CardNumberInput
        onChange={this.handleChange}
        cardNumber={this.state.cardNumber}
      />
    );
  }
}

export default CardNumberHolder;
