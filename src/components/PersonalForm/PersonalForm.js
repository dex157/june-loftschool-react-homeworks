import React, { Component } from 'react';
import './PersonalForm.css';
export default class PersonalForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props,
      name = event.target.name,
      value = event.target.value;

    onChangeForm(name, value);
  };
  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <div className="personal-form">
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
