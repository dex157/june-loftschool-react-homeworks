import React, { Component } from 'react';
import './CardForm.css';

export default class CardForm extends Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  componentWillUnmount() {}

  render() {
    return (
      <div data-test="card-form" className="card-form">
        <input name="cardNumber" onChange={this.handleChangeForm} />
      </div>
    );
  }
}
