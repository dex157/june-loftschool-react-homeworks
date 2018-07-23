import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  static displayName = 'Card number formatting';

  handlChange = value => {
    this.setState({ cardNumber: value });
  };

  render() {
    const { cardNumber } = this.state;

    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handlChange} />
    );
  }
}

export default CardNumberHolder;
