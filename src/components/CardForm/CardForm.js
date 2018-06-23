import React, { Component } from 'react';
import './CardForm.css';

export default class CardForm extends Component {
  componentWillUnmount() {}

  handleChangeForm = e => {
    const { onChangeForm } = this.props,
      name = e.target.name,
      value = e.target.value;

    onChangeForm(name, value);
  };

  render() {
    const { cardNumber } = this.props;

    return (
      <form className="card-form" data-test="card-form">
        <input
          className="onChange"
          type="text"
          name="cardNumber"
          onChange={this.handleChangeForm}
          value={cardNumber}
          placeholder="xxxxxxxxxxxxxxxx"
        />
      </form>
    );
  }
}
