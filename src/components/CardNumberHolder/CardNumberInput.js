import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  format(str) {
    if (!str) {
      return '';
    }
    if (isNaN(str)) {
      return this.state.number;
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
    return str.replace(/\s/g, '');
  }

  componentWillReceiveProps(nextProps) {
    const { cardNumber } = nextProps;
    console.log('1 ===>', cardNumber);

    this.handleFunc(cardNumber);
  }

  componentDidMount() {
    const { cardNumber } = this.props;
    console.log('3 ===>', cardNumber);
    

    this.handleFunc(cardNumber);
  }

  handleFunc(number) {
    const normalizeNumber = this.normalize(number);

    this.setState({ number: this.format(normalizeNumber) });
  }

  render() {
    const { onChange } = this.props;
    console.log('render ===>', onChange);
    
    return <input onChange={onChange} value={this.state.number} />;
  }
}

export default CardNumberInput;
