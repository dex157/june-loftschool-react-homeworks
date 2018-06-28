import React, { Component } from 'react';
import './PersonalForm.css';

export class PersonalForm extends Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };
  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div className="personal-form">
        <h1 className="title">Персональная информация</h1>
        <input
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={this.handleChangeForm}
        />
        <input
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={this.handleChangeForm}
        />
        <input
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
