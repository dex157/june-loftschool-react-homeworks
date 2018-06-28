import React, { Component } from "react";

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.format(props.cardNumber)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cardNumber !== this.props.cardNumber) {
      this.setState({ number: this.format(nextProps.cardNumber) });
    }
  }

  format(value) {
    if (value === null) {
      return "";
    }

    return String(value)
      .replace(/(\w{4})/g, "$1 ")
      .replace(/^\s+|\s+$/g, "");
  }

  normalize(value) {
    return value.replace(/\s/g, "");
  }

  handleInput = (e) => {
    const { onChange } = this.props;
    const value = this.normalize(e.target.value);

    if (value.length <= 20) {
      onChange(value);
    }
  };

  render() {
    const { number } = this.state;

    return <input value={number} onChange={this.handleInput}/>;
  }
}

export default CardNumberInput;