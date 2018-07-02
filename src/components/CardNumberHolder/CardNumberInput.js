import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  componentWillReceiveProps(nextProps) {
    this.setFormatedValue(nextProps.cardNumber);
  }

  componentDidMount() {
    this.setFormatedValue(this.props.cardNumber);
  }

  setFormatedValue(cardNumber) {
    const normalizedNumber = this.normalize(cardNumber);
    this.setState({
      number: this.format(normalizedNumber)
    });
  }

  format(str) {
    if (str) {
      return str
        .toString()
        .replace(/(\d{0,4})/gi, '$1 ')
        .trim();
    } else {
      return '';
    }
  }

  normalize(str) {
    if (str) {
      return str.replace(/\s|[a-zA-Z]/gi, '');
    } else {
      return '';
    }
  }

  render() {
    const { onChange } = this.props;
    const { number } = this.state;
    return <input onChange={onChange} value={number} />;
  }
}

export default CardNumberInput;
