import React, { Component } from 'react';

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.format(this.props.cardNumber)
    };
  }

  format = number => {
    if (!number) return '';

    const numberString = String(number);

    let newNumber = '';

    for (let i = 1; i <= numberString.length; i++) {
      newNumber += numberString[i - 1];
      if (i % 4 === 0 && i < numberString.length) {
        newNumber += ' ';
      }
    }

    return newNumber;
  };

  normalize = number => {
    return number.split(' ').join('');
  };

  componentWillReceiveProps = nextProps => {
    const number = this.normalize(nextProps.cardNumber);

    this.setState({ number: this.format(number) });
  };

  render() {
    const { number } = this.state,
      { onChange } = this.props;

    return (
      <input type="text" onChange={onChange} value={number} />
    );
  }
}

export default CardNumberInput;
