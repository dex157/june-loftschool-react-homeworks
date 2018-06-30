import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };
  static displayName = 'Card number formating ';

  handleChange = event => {
    this.setState({ cardNumber: event.target.value });
  };

  render() {
    const { cardNumber } = this.state.cardNumber;
    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange} />
    );
  }
}

export default CardNumberHolder;
