import React, { Component, Fragment } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  format(cardNumber) {
    return cardNumber
      ? cardNumber
          .toString()
          .match(/.{1,4}/g)
          .join(' ')
      : '';
  }

  normalize(cardNumber) {
    return cardNumber.split(' ').join('');
  }

  componentWillReceiveProps(nextProps) {
    const normNumber = this.normalize(nextProps.cardNumber);
    this.setState({
      number: this.format(normNumber)
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
