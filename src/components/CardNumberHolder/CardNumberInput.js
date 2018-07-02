import React, { Component } from 'react';

class CardNumberInput extends Component {
  // CardNumberInput будет возвращать input и форматировать его значение при вводе,
  //расставляя пробелы после каждого 4 символа, и нормализовать значение удаляя пробелы,
  //при измении и передавая нормализованную строку в props.onChange
  state = {
    number: this.format(this.props.cardNumber)
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.cardNumber !== this.props.cardNumber) {
      //если nextProps.cardNumber строго не равен( !==)
      this.setState({ number: this.format(nextProps.cardNumber) }); //тогда значение введенное в number например '12345'  меняет на  '1234 5' через метод   format
    }
  }

  format(value) {
    if (value == null) {
      return '';
    }

    return String(value)
      .replace(/(\w{4})/g, '$1 ')
      .replace(/^\s+|\s+$/g, '');
  }

  normalize(value) {
    return value.replace(/\s/g, '');
  }
  handleInput = e => {
    const { onChange } = this.props;
    const value = this.normalize(e.target.value); //передает нормализованную строку , т.е. с пробелами и возвращает в value

    if (value.length > 18) {
      return;
    }
    onChange(value);
  };
  render() {
    const { number } = this.state;

    return <input value={number} onChange={this.handleInput} />;
  }
}

export default CardNumberInput;
