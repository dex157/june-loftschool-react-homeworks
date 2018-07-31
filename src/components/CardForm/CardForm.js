import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
  componentWillUnmount() {}

  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  render() {
    const { cardNumber } = this.props;

    return (
      <div className="card-form" data-test="card-form">
        <h1 className="title">Номер карты</h1>
        <input
          name="cardNumber"
          value={cardNumber}
          placeholder={'0000000000000000'}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
