import React, { Component } from 'react';
import './PersonalForm.css';

export default class PersonalForm extends Component {
  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div className="personal-form" data-test="personal-form">
        <input
          name="firstName"
          onChange={this.handleChangeForm}
          value={firstName}
          placeholder="First name"
        />
        <input
          name="lastName"
          onChange={this.handleChangeForm}
          value={lastName}
          placeholder="Last name"
        />
        <input
          name="email"
          onChange={this.handleChangeForm}
          value={email}
          placeholder="Email"
        />
      </div>
    );
  }
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };
}
