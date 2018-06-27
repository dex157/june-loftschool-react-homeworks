import React, { Component } from 'react';

import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  static displayName = 'Card number formating';

  handleChange = e => {
    this.setState({ cardNumber: e.target.value });
  };

  render() {
    const { cardNumber } = this.state;

    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange} />
    );
  }
}

export default CardNumberHolder;
