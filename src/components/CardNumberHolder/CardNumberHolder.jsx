import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {

  state = {
    cardNumber: ''
  }

  static displayName = 'Card number formating';

  handleChange = (number) => {
    this.setState(() => {
      return { 
        cardNumber: number 
      }
    })
  }

  render() {
    return (
      <CardNumberInput onChange={this.handleChange} cardNumber={this.state.cardNumber}></CardNumberInput>
    );
  }
}

export default CardNumberHolder;
