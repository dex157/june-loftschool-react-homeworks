import React, { Component } from 'react';
import Title from '../Title';

class CardForm extends Component {
  state = {};

  handleChangeForm = event => {
    const { name, value } = event.target;
    this.props.onChangeForm(name, value);
  };

  componentWillUnmount = {};

  render() {
    return (
      <div className="card-form" data-test="card-form">
        <Title>Номер карты</Title>
        <input
          name="cardNumber"
          value={this.props.cardNumber}
          placeholder="0000000000000000"
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
