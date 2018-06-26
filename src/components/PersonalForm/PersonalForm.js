import React, { Component } from 'react';
import './PersonalForm.css';
import Title from './../Title';

class PersonalForm extends Component {
  handleChangeForm = e => {
    const name = e.target.name,
      value = e.target.value;

    this.props.onChangeForm(name, value);
  };

  render() {
    return (
      <div className="personal-form" data-test="personal-form">
        <Title>Персональная информация</Title>
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          onChange={this.handleChangeForm}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          onChange={this.handleChangeForm}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
