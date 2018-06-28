import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput.js';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.format(value);
    this.setState(state => ({
      number: this.normalize(value)
    }))
  };

  render() {
    return <CardNumberInput onChange={this.handleChange} />;
  }
}

export default CardNumberHolder;
