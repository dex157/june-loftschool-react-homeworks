import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";

class CardNumberHolder extends Component<Props, State> {
  static displayName = "Card number formating";

  state = {
    cardNumber: ""
  };

  handleChange = (cardNumber) => {
    this.setState({
      cardNumber: cardNumber
    });
  };

  render() {
    const { cardNumber } = this.state;

    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange}/>
    );
  }
}

export default CardNumberHolder;
