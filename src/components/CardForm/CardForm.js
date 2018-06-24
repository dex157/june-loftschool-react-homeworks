import React, { Component } from 'react';

import './CardForm.css';

class CardForm extends Component {
  state = {};

  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  componentWillUnmount = () => {};

  render() {
    const { cardNumber } = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <input
          name="cardNumber"
          placeholder="0000000000000000"
          value={cardNumber}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
