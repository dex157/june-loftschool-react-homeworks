import React, { Component, Fragment } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  format(cardNumber) {
    if (cardNumber)
      return cardNumber
        .toString()
        .match(/.{1,4}/g)
        .join(' ');
    else return '';
  }

  normalize(cardNumber) {
    return cardNumber.split(' ').join('');
  }

  componentWillReceiveProps(nextProps) {
    const number = this.normalize(nextProps.cardNumber);
    this.setState({
      number: this.format(nextProps.cardNumber)
    });
  }

  render() {
    const { number } = this.state,
      { onChange } = this.props;
    return (
      <Fragment>
        <input name="CardNumberInput" onChange={onChange} value={number} />
      </Fragment>
    );
  }
}

export default CardNumberInput;
