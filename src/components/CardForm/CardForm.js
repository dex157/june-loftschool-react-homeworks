import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {

  handleChangeForm = event => {
    let simulateFn = this.props.onChangeForm;
    if (simulateFn) {
      simulateFn(event.target.name, event.target.value);
    }
  };

  render() {
    return (
      <div data-test="card-form" className="card-form">
        <h1>Нумер карты</h1>
        <input
          name="cardNumber"
          placeholder="XXXXXXXXXXXXXXXX"
          onChange={this.handleChangeForm}
          value={this.props.cardNumber}
        />
      </div>
    );
  }
}

export default CardForm;