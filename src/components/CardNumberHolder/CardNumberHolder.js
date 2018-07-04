import React, { Component, Fragment } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };

  render() {
    return (
      <Fragment>
        <CardNumberInput
          cardNumber={this.state.cardNumber}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }

  handleChange = value => {
    this.setState({ cardNumber: value });
  };
}

export default CardNumberHolder;
