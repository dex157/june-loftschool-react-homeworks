import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onChangeForm(name, value);
  };

  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div className="personal-form" data-test="personal-form">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={this.handleChangeForm}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={this.handleChangeForm}
        />
        <input
          type="text"
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
