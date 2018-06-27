import React, { Component } from 'react';
import './CardForm.css';

export default class CardForm extends Component {
  componentWillUnmount() {}
  render() {
    const { cardNumber } = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <input
          name="cardNumber"
          onChange={this.handleChangeForm}
          value={cardNumber}
          placeholder="0000000000000000"
        />
      </div>
    );
  }

  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };
}
