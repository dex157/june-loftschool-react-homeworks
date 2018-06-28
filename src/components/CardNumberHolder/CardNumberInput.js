import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  format(str) {
    if (!str) {
      return '';
    }
    return str
      .toString()
      .replace(/(\d{0,4})/gi, '$1 ')
      .trim();
  }

  normalize(str) {
    if (!str) {
      return '';
    }
    return str.replace(/\s|[a-zA-Z]/gi, '');
  }

  componentWillReceiveProps(nextProps) {
    this.setFormatedValue(nextProps.cardNumber);
  }

  componentDidMount() {
    this.setFormatedValue(this.props.cardNumber);
  }

  setFormatedValue(cardNumber) {
    const normalizedCard = this.normalize(cardNumber);
    this.setState({
      number: this.format(normalizedCard)
    });
  }

  render() {
    return <input onChange={this.props.onChange} value={this.state.number} />;
  }
}

export default CardNumberInput;
