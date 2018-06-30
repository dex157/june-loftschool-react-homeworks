import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      number: this.format(this.props.cardNumber)
    };
  }

  static propTypes = {
    cardNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  componentDidMount() {
    const value = this.normalize(this.props.cardNumber);
    this.setState({ number: this.format(value) });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cardNumber !== this.props.cardNumber) {
      this.setState(state => {
        this.format(nextProps.cardNumber);
      });
    }
  }

  format = value => {
    if (!value) {
      return '';
    }
    const resultValue = value
      .toString()
      .replace(/(\w{4})/g, match => `${match} `);
    return resultValue;
  };

  normalize = value => {
    return value ? value.replace(/s/g, '') : '';
  };

  render() {
    const { number, onChange } = this.state.number;
    return <input value={number} onChange={onChange} />;
  }
}

export default CardNumberInput;
