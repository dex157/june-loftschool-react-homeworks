import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';
class CardNumberHolder extends Component {
  state = {
    cardNumber: '' //состояние по умолчанию
  };

  static displayName = 'Card number formating'; //Для установления имени у компоненты (для вывода на экран) Для

  handleChange = value => {
    this.setState({ cardNumber: value }); //при заполнении формы значение cardNumber меняется на введенные данные, через setState
  };
  render() {
    const { cardNumber } = this.state;

    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange} /> //Компоненту CardNumberInput передается метод CardNumberHolder.handleChange в props.onChange Рендер компоненты CardNumberInput
    );
  }
}
export default CardNumberHolder;
