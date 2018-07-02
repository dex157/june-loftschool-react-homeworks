import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };
  format = number => {
    if (!number) number = '';
    let newNumber = number.toString().replace(/ /g, '');
    newNumber = newNumber.replace(/([a-zA-Z0-9]{4})/g, '$1 ').trim();
    return newNumber.toString();
  };
  normalize = number => {
    let newNumber = number.trim();
    newNumber = newNumber.replace(/ /g, '');
    return newNumber.toString();
  };
  handleChange = event => {
    const onChange = this.props.onChange;
    const number = this.normalize(event.target.value);
    onChange(number);
  };
  componentWillReceiveProps = props => {
    this.setState({ number: this.format(props.cardNumber) });
  };

  componentWillMount = () => {
    this.setState({ number: this.format(this.props.cardNumber) });
  };
  render() {
    const { number } = this.state;

    return <input value={number} onChange={this.handleChange} />;
  }
}

export default CardNumberInput;
