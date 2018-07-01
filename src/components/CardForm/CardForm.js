import React, { Component } from 'react';
import './CardForm.css';
import Title from 'components/Title';

export default class CardForm extends Component {
  handleChangeForm = element => {
    const { name, value } = element.target;

    this.props.onChangeForm(name, value);
  };

  componentWillUnmount = () => {};

  render() {
    return (
      <div data-test="card-form">
        <Title title="Номер карты" />
        <div className="card-form">
          <input
            type="number"
            name="cardNumber"
            placeholder="0000000000000000"
            onChange={this.handleChangeForm}
            value={this.props.cardNumber}
          />
        </div>
      </div>
    );
  }
}
