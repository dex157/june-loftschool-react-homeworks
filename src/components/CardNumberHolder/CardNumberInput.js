import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: this.format(this.props.cardNumber)
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.cardNumber !== this.props.cardNumber) {
      this.setState(() => ({
        number: this.format(nextProps.cardNumber)
      }));
    }
  }

  format(number) {
    if (number === null) {
      return '';
    }

    let res = [];
    let arr = number.toString().split('');

    while (arr.length > 0) {
      res.push(arr.splice(0, 4).join(''));
    }

    return res.join(' ');
  }

  normalize = number => number.replace(/\s/g, '');

  handleInput = e => {
    const val = this.normalize(e.target.value);
    if (val.length > 16) {
      return false;
    }

    this.props.onChange(val);
  };

  render() {
    return <input value={this.state.number} onChange={this.handleInput} />;
  }
}

export default CardNumberInput;
