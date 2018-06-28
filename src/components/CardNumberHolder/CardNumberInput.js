import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  format = number => {
    let formatted = '',
      digitCounter = 0;
    if (number === undefined || number == null) {
      return '';
    }

    number = number.toString(); /* если вдруг это это int */

    for (let i = 0; i < number.length; i++) {
      if (number[i] !== ' ') {
        if (digitCounter === 4) {
          formatted += ' ';

          formatted += number[i];
          digitCounter = 0;
        } else {
          formatted += number[i];
        }

        digitCounter++;
      }
    }
    return formatted;
  };

  normalize = number => {
    return number.split(' ').join('');
  };

  handleOnChange = event => {
    let rawInput = event.target.value;
    let formatted = this.format(rawInput);
    this.setState({ number: formatted });

    let normalized = this.normalize(rawInput);
    let parentFn = this.props.handleChange;
    if (parentFn) {
      parentFn('cardNumber', normalized);
    }
  };

  componentWillReceiveProps(nextProps) {
    let formatted = this.format(nextProps.cardNumber);
    this.setState({ number: formatted });
  }

  componentWillMount() {
    let number = this.props.cardNumber;
    let formatted = this.format(number);
    this.setState({ number: formatted });
  }

  render() {
    return (
      <input
        type="text"
        name="number"
        value={this.state.number}
        onChange={this.handleOnChange}
      />
    );
  }
}

export default CardNumberInput;
