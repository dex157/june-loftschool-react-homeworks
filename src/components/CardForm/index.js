import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
  state = {};
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const { name, value } = event.target;
    onChangeForm(name, value);
  };
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentWillUnmount() {}
  render() {
    const { cardNumber } = this.props;
    return (
      <div className="card-form" data-test="card-form">
        <input
          name="cardNumber"
          placeholder="0000000000000000"
          onChange={this.handleChangeForm}
          value={cardNumber}
        />
      </div>
    );
  }
}

export default CardForm;
