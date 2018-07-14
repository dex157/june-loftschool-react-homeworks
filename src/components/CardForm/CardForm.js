import React, { Component } from 'react';
import Title from '../Title';

export default class CardForm extends Component {
  componentWillUnmount() {}

  handleChangeForm = event => {
    const { name, value } = event.target;
    const { onChangeForm } = this.props;
    onChangeForm(name, value);
  };

  render() {
    const { cardNumber } = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <Title>Номер карты</Title>
        <input
          name="cardNumber"
          onChange={this.handleChangeForm}
          value={cardNumber}
        />
      </div>
    );
  }
}
