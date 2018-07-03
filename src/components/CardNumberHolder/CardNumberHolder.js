import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  static displayName = 'Card number formating';

  state = {
    cardNumber: ''
  };

  render() {
    return (
      <div>
        <CardNumberInput
          cardNumber={this.state.cardNumber}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange = value => {
    this.setState({ cardNumber: value });
  };
}

export default CardNumberHolder;
