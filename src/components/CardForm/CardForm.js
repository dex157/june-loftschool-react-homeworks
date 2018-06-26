import React, { Component } from 'react';

import './CardForm.css';

class CardForm extends Component {
  handleChangeForm = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onChangeForm(name, value);
  };

  componentWillUnmount() {
    console.log('CardForm is unmounted');
  }

  render() {
    const { cardNumber } = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <input
          type="text"
          name="cardNumber"
          placeholder="1234000043210000"
          value={cardNumber}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
