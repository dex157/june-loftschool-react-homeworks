import React, { PureComponent } from 'react';
import './PersonalForm.css';

export default class PersonalForm extends PureComponent {
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
          placeholder="First Name"
          value={firstName}
          onChange={this.handleChangeForm}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
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
