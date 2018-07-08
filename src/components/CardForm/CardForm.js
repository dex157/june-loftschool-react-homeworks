import React, { Component } from 'react';

export default class CardForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props,
      name = event.target.name,
      value = event.target.value;

    onChangeForm(name, value);
  };

  render() {
    const { cardNumber } = this.props;
    return (
      <CardForm>
        <div className="card-form">
          <input
            name="cardNumber"
            onChange={this.handleChangeForm}
            value={cardNumber}
          />
        </div>
      </CardForm>
    );
  }
}
