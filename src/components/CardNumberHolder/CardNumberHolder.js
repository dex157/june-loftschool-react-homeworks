import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: 'пожалуйста'
  };
  static displayName = 'Card number formating ';

  handleChange = value => {
    this.setState({ cardNumber: value });
  };
  render() {
    const { cardNumber } = this.state.cardNumber;
    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange} />
    );
  }
}

export default CardNumberHolder;
