import React, {Component} from 'react';
import CardNumberInput from "./CardNumberInput";

export default class CardNumberHolder extends Component {
   state = {
      cardNumber: ''
   };

   static displayName = 'Card number formating';

   handleChange = (value) => {
      this.setState({
         cardNumber: value
      })
   };

   render() {
      return (
         <CardNumberInput cardNumber={this.state.cardNumber} onChange={this.handleChange}/>
      );
   }
}
