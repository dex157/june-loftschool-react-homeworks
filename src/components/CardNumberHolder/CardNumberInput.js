import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: this.format(this.props.cardNumber)
  };

  format(value) {
    return String(value)
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
  }

  normalize(value) {
    return String(value).replace(/\s/g, '');
  }

  componentWillReceiveProps = props => {
    this.setState({
      number: this.format(props.cardNumber)
    });
  };
  //

  handleChangeInput = event => {
    const cardNumber = this.normalize(event.target.value);
    const { onChange } = this.props;

    onChange(cardNumber);
    // console.log(cardNumber);
  };
  render() {
    return (
      <input
        type="text"
        placeholder="Numbers only, please"
        onChange={this.handleChangeInput}
        value={this.state.number}
      />
    );
  }
}

export default CardNumberInput;
