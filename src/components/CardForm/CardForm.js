import React, { Component } from 'react';
import Title from '../Title';
import './CardForm.css';

class CardForm extends Component {
  handleChangeForm = e => {
    this.props.onChangeForm(e.target.name, e.target.value);
  };
  componentWillUnmount = () => {};
  render() {
    return (
      <div className="card-form" data-test="card-form">
        <Title title={'Номер карты'} />
        <input
          type="text"
          name="cardNumber"
          placeholder="0000000000000000"
          onChange={this.handleChangeForm}
          value={this.props.cardNumber}
        />
      </div>
    );
  }
}

export default CardForm;
