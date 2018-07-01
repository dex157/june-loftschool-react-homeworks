import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
  state = {};

  componentWillUnmount() {}

  handleChangeForm = event =>
    this.props.onChangeForm(event.target.name, event.target.value);

  render() {
    return (
      <div data-test="card-form" className="card-form">
        <input
          name="cardNumber"
          onChange={this.handleChangeForm}
          value={this.props.cardNumber}
        />
      </div>
    );
  }
}

export default CardForm;
