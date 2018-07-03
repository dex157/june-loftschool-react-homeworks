import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: this.format(this.props.cardNumber)
  };

  format(cardNumber) {
    if (cardNumber === null) return '';

    return String(cardNumber)
      .replace(/(\w{4})/g, '$1 ')
      .trim();
  }

  normalize(cardNumber) {
    return cardNumber.split(' ').join('');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cardNumber !== this.props.cardNumber) {
      this.setState({
        number: this.format(nextProps.cardNumber)
      });
    }
  }

  handleChange = event => {
    const { onChange } = this.props;
    const value = this.normalize(event.target.value);
    onChange(value);
  };

  render() {
    const { number } = this.state;

    return <input value={number} onChange={this.handleChange} />;
  }
}

export default CardNumberInput;
