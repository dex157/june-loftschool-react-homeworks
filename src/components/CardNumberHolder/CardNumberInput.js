import React, { Component } from 'react';

class CardNumberInput extends Component {
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

  componentWillReceiveProps(nextProps) {
    this.setState({ number: this.format(nextProps.cardNumber) });
  }

  state = {
    number: this.format(this.props.cardNumber)
  };

  render() {
    return <input value={this.state.number} onChange={this.props.onChange} />;
  }
}

export default CardNumberInput;
