import React, { Component } from 'react';

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.format(props.cardNumber)
    };
  }

  format = number => {
    if (!number) return '';

    const numberString = String(number);

    let newNumber = '';

    for (let i = 1; i <= numberString.length; i++) {
      newNumber += numberString[i - 1];
      if (i % 4 === 0) {
        newNumber += ' ';
      }
    }

    return newNumber;
  };

  normalize = number => {
    return number.split(' ').join('');
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ number: this.format(nextProps.cardNumber) });
  };

  render() {
    return <input type="text" />;
  }
}

export default CardNumberInput;
