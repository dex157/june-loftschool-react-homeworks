import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: this.props.cardNumber
  };

  format = num => {
    if (num != null) {
      num = num.toString();
      const v = num.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      const matches = v.match(/\d{4,}/g);
      const match = (matches && matches[0]) || '';
      const parts = [];
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      if (parts.length) {
        return parts.join(' ');
      } else {
        return num;
      }
    } else {
      return (num = '');
    }
  };

  normalize = num => {
    return num.replace(/\s/g, '');
  };

  componentWillMount() {
    this.setState({ number: this.format(this.props.cardNumber) });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ number: this.format(nextProps.cardNumber) });
    }
  }

  handleOnChange = event => {
    this.props.onChange(this.normalize(event.target.value));
  };

  render() {
    return <input value={this.state.number} onChange={this.handleOnChange} />;
  }
}

export default CardNumberInput;
