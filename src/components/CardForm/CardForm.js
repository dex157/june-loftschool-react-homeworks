import React, { Component } from 'react';

export default class CardForm extends Component {
  componentWillUnmount() {}
  handleChangeForm = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onChangeForm(name, value);
  };

  render() {
    const { cardNumber } = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <input
          name="cardNumber"
          onChange={this.handleChangeForm}
          value={cardNumber}
        />
      </div>
    );
  }
}
