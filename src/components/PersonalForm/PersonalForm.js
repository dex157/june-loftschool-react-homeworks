import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
  state = {};

  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <div className="personal-form" data-test="personal-form">
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
          placeholder="Email"
          value={email}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
