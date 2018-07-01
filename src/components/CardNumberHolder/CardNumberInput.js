import React, { Component, Fragment } from 'react';

class CardNumberInput extends Component {
  state = {
    number: "1234 5"
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
    console.log(this.format(normNumber))
    this.setState({
      number: this.format(normNumber)
    });
  }

  render() {
    const { number } = this.state,
      { onChange } = this.props;
    return (
      <Fragment>
        <input type="text" onChange={onChange} value={number} />
      </Fragment>
    );
  }
}

export default CardNumberInput;
