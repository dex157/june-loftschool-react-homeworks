import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  componentWillMount() {
    this.setState({ number: this.format(this.props.cardNumber) });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cardNumber !== nextProps.cardNumber) {
      this.setState({ number: this.format(nextProps.cardNumber) });
    }
  }

  render() {
    return <input value={this.state.number} onChange={this.handleChange} />;
  }

  handleChange = event => {
    this.props.onChange(this.normalize(event.target.value));
  };

  format = number => {
    if (number)
      return number
        .toString()
        .replace(/.{4}/g, '$& ')
        .trim();
    else return '';
  };

  normalize = string => {
    return string.replace(/ /g, '');
  };
}

export default CardNumberInput;
