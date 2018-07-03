import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  static displayName = 'Card number formating';

  state = {
    cardNumber: ''
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ cardNumber: value });
  };

  render() {
    const { cardNumber } = this.state;
    return (
      <CardNumberInput onChange={this.handleChange} cardNumber={cardNumber} />
    );
  }
}

export default CardNumberHolder;
