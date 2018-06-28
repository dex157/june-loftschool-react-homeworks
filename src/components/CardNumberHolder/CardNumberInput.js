import React, { Component } from 'react';

export default class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.refInput = React.createRef();
    this.state = {
      number: props.cardNumber ? this.format(props.cardNumber) : ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { cardNumber } = nextProps;
    this.stateChange(cardNumber);
  }

  stateChange = cardNumber => {
    this.setState(
      state => ({
        number: this.format(cardNumber)
      }),
      () => (this.refInput.current.value = this.state.number)
    );
  };

  format = value => {
    if (value === null) {
      return '';
    }
    const newValue = value.toString();
    const modified = newValue
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    return modified;
  };

  normalize = value => {
    const newValue = value.replace(/\s/g, '').trim();
    return newValue;
  };

  render() {
    const { onChange } = this.props;
    return (
      <input
        ref={this.refInput}
        onChange={event => onChange(this.normalize(event.target.value))}
      />
    );
  }
}
