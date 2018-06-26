import React, { Component } from 'react';

import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  render() {
    const { cardNumber } = this.state;

    return <CardNumberInput cardNumber={cardNumber} />;
  }
}

export default CardNumberHolder;
