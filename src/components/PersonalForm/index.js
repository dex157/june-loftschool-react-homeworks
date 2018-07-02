import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
  state = {};
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const { name, value } = event.target;
    onChangeForm(name, value);
  };
  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div className="personal-form">
        <input
          name="firstName"
          placeholder="First name"
          onChange={this.handleChangeForm}
          value={firstName}
        />
        <input
          name="lastName"
          placeholder="Last name"
          onChange={this.handleChangeForm}
          value={lastName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={this.handleChangeForm}
          value={email}
        />
      </div>
    );
  }
}

export default PersonalForm;
