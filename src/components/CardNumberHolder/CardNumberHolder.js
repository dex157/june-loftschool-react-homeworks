import React from "react";
import CardNumberInput from "./CardNumberInput";

class CardNumberHolder extends React.Component {
  state = {
    cardNumber: ""
  };

  render() {
    return <CardNumberInput
      cardNumber={this.state.cardNumber}
      onChange={this.handleChange}
    />;
  }

  handleChange = value => {
    this.setState({ cardNumber: value });
  };
}

export default CardNumberHolder;
