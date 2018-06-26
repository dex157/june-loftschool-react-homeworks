import React, { Component } from 'react';
import './CardForm.css';
import Title from './../Title';

class CardForm extends Component {
  handleChangeForm = e => {
    const name = e.target.name,
      value = e.target.value;

    this.props.onChangeForm(name, value);
  };
  componentWillUnmount() {}

  render() {
    return (
      <div className="card-form" data-test="card-form">
       <Title>Информация о карте</Title>
        <input type="text" name="cardNumber" onChange={this.handleChangeForm} />
      </div>
    );
  }
}

export default CardForm;
