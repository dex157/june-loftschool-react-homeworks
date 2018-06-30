import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     number: nextProps
  //   };
  // }

  componentDidMount() {
    let qwe = this.props.cardNumber;
    // debugger;
    const value = this.normalize(this.props.cardNumber);
    this.setState({ number: this.format(value) });
  }

  componentWillReceiveProps(nextProps) {
    // debugger;
    this.setState(state => {
      this.format(nextProps.cardNumber);
    });
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
    const { number } = this.state.number;
    // const { onChange } = this.props.onChange;
    return <input value={number} onChange={this.props.onChange} />;
  }
}

export default CardNumberInput;
