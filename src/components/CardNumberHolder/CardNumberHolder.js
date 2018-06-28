import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput.js';

class CardNumberHolder extends Component {
  state = {
    cardNumber: "",
  };
  
  static displayName = 'Card number formating';

  handleChange = value => {
    this.setState({cardNumber: value});
  };

  render() {
    const { cardNumber } = this.state;
    
    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange}/>
    );
  }
}

export default CardNumberHolder;
