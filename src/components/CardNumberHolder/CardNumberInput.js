import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  componentWillReceiveProps(nextProps) {
    this.setState(state => ({
      number: this.format(nextProps)
    }));
  }

  format = value => {
    if (value === null) {
      return '';
    }
    const newValue = value.toString();
    return newValue
      .replace(/[^\dA-Z]/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  normalize = value => {
    const newValue = value.replace(/\s/g, '').trim();
    return newValue;
  };

  render() {
    const { onChange } = this.props;
    return <input onChange={onChange} />;
  }
}

export default CardNumberInput;
