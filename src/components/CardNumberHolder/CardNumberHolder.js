import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  static displayName = 'Card number formating';

  handleChange = event => {
    this.setState({
      cardNumber: event.target.value
    });
  };

  render() {
    return (
      <CardNumberInput
        onChange={this.handleChange}
        cardNumber={this.state.cardNumber}
      />
    );
  }
}

export default CardNumberHolder;
