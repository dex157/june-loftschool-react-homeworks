import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  componentDidMount() {
    const value = this.normalize(this.props.cardNumber);
    this.setState({ number: this.format(value) });
  }

  componentWillReceiveProps(nextProps) {
    const cardNumber = this.format(nextProps.cardNumber);
    this.setState({
      number: cardNumber
    });
  }

  format = value => {
    if (!value) {
      return '';
    }
    const resultValue = value
      .toString()
      .replace(/(\w{4})/g, match => `${match} `)
      .trim();
    return resultValue;
  };

  normalize = value => {
    return value ? value.split(' ').join('') : '';
  };

  handleChange = event => {
    const { onChange } = this.props;
    let numberCard = this.normalize(event.target.value);
    onChange(numberCard);
  };

  render() {
    const { number } = this.state;
    return <input value={number} onChange={this.handleChange} />;
  }
}

export default CardNumberInput;
