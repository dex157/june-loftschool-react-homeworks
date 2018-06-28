import React, { Component } from 'react';
import './CardForm.css';

export class CardForm extends Component {
  constructor(props) {
    super(props);
  }

  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  componentWillUnmount() {}

  render() {
    return (
      <div className="card-form" data-test="card-form">
        <h1 className="title">Номер карты</h1>
        <input
          name="cardNumber"
          placeholder="0000000000000000"
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
