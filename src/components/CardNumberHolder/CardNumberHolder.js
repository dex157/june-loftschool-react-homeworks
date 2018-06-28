import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  static displayName = 'Card number formating';

  state = {
    cardNumber: ''
  };

  handleChange = (fieldName, fieldValue) => {
    this.setState(prevState => {
      let newState = JSON.parse(JSON.stringify(prevState));
      newState[fieldName] = fieldValue;
      return newState;
    });
  };

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
