import React, { Component } from 'react';
import propTypes from 'prop-types';

class CardNumberInput extends Component {
  static propTypes = {
    cardNumber: propTypes.string,
    onChange: propTypes.func
  };

  state = {
    number: this.format(this.props.cardNumber)
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ number: this.format(nextProps.cardNumber) });
  }

  format(value) {
    return !value ? '' : `${value}`.replace(/(\w{0,4})/g, '$1 ').trimRight();
  }

  normalize(value) {
    return value.replace(/\s/g, '');
  }

  handleInput = event => {
    const { onChange } = this.props;
    if (typeof onChange !== 'function') {
      return;
    }
    const value = this.normalize(event.target.value);

    if (value.length > 16) {
      return;
    }

    onChange(value);
  };

  render() {
    return <input value={this.state.number} onChange={this.handleInput} />;
  }
}

export default CardNumberInput;
