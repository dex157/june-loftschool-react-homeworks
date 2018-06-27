import React, { Component } from 'react';

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = { number: this.format(props.cardNumber) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ number: this.format(nextProps.cardNumber) });
  }

  render() {
    return <input onChange={this.inputOnChange} value={this.state.number} />;
  }

  inputOnChange = event => {
    this.setState({ number: this.format(event.target.value) });
    this.props.onChange(this.normalize(event.target.value));
  };

  format = number => {
    if (number)
      return number
        .toString()
        .replace(/(\S{4})/g, '$1 ')
        .replace(/ +/g, ' ')
        .trim();
    return '';
  };
  normalize = number => {
    if (number) {
      let value = number.toString();
      return value.replace(/ /g, '');
    }
    return '';
  };
}

export default CardNumberInput;
