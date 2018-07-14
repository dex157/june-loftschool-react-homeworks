import React, { Component } from 'react';
import './PersonalForm.css';
import Title from '../Title';
export default class PersonalForm extends Component {
  handleChangeForm = event => {
    const { name, value } = event.target;
    const { onChangeForm } = this.props;
    onChangeForm(name, value);
  };

  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <div className="personal-form" data-test="personal-form">
        <Title>Персональная информация</Title>
        <input
          name="firstName"
          onChange={this.handleChangeForm}
          value={firstName}
          placeholder="firstName"
        />
        <input
          name="lastName"
          onChange={this.handleChangeForm}
          value={lastName}
          placeholder="lasttName"
        />
        <input
          name="email"
          onChange={this.handleChangeForm}
          value={email}
          placeholder="email"
        />
      </div>
    );
  }
}
