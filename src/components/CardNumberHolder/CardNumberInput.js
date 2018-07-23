import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: this.format(this.props.cardNumber)
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.cardNumber !== this.props.cardNumber) {
      this.setState({ number: this.format(nextProps.cardNumber) });
    }
  }

  format(value) {
    if (value === null) {
      return '';
    }

    return String(value)
      .replace(/(\w{4})/g, '$1 ')
      .replace(/^\s+|\s+$/g, '');
  }

  normalize(value) {
    return value.replace(/\s/g, '');
  }

  handleInput = event => {
    const { onChange } = this.props;
    const value = this.normalize(event.target.value);

    if (value.length > 16) {
      return;
    }

    onChange(value);
  };

  render() {
    const { number } = this.state;

    return <input value={number} onChange={this.handleInput} />;
  }
}

export default CardNumberInput;
