import React, { PureComponent } from 'react';
import './CardForm.css';

export default class CardForm extends PureComponent {
  componentWillUnmount() {}

  render() {
    const { cardNumber } = this.props;

    return (
      <div data-test="card-form">
        <h1 className="title">Номер карты</h1>
        <div className="card-form">
          <input
            name="cardNumber"
            placeholder="0000000000000000"
            value={cardNumber}
            onChange={this.handleChangeForm}
          />
        </div>
      </div>
    );
  }

  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const { name, value } = event.target;

    onChangeForm(name, value);
  };
}
