import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  componentDidMount() {
    const value = this.normalize(this.props.cardNumber);
    debugger;
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

  handleChange = event => {
    const { onChange } = this.props;
    let numberCard = this.setState({ cardNumber: event.target.value });
    onChange(numberCard);
  };

  render() {
    const { number } = this.state;
    // const { onChange } = this.props;
    return <input value={number} onChange={this.handleChange} />;
  }
}

export default CardNumberInput;
