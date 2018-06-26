import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillUnmount() {}

  handleChangeForm = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onChangeForm(name, value);
  };
  render() {
    const { cardNumber } = this.props;
    return (
      <div className="card-form">
        <input
          type="text"
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
