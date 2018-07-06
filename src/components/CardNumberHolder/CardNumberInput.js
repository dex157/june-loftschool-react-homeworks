import React, { Component } from 'react';

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = { number: this.format(this.props.cardNumber) };
  }

  format = string => {
    if (!string) return '';
    if (typeof string !== 'string') string = string.toString();

    string = this.normalize(string);

    let formatedString = '';

    for (let i = 0; i < string.length; ++i) {
      formatedString += string[i];
      if (i % 4 === 3 && i + 1 < string.length) formatedString += ' ';
    }

    return formatedString;
  };

  normalize = string => {
    if (!string) return '';
    if (typeof string !== 'string') string = string.toString();

    let normalizedString = '';

    for (let i = 0; i < string.length; ++i)
      if (string[i] !== ' ') normalizedString += string[i];

    return normalizedString;
  };

  componentWillReceiveProps = newProps => {
    const { cardNumber } = newProps;

    this.setState({ number: this.format(cardNumber) });
  };
  handleChangeInput = event => {
    const cardNumber = this.normalize(event.target.value);

    if (cardNumber.length > 16) return false;

    this.props.onChange(cardNumber);
  };
  render() {
    return (
      <input
        type="text"
        value={this.state.number}
        onChange={this.handleChangeInput}
      />
    );
  }
}

export default CardNumberInput;
