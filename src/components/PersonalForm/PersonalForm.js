import React, { PureComponent } from 'react';
import './PersonalForm.css';

export default class PersonalForm extends PureComponent {
  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <div data-test="personal-form">
        <h1 className="title">Персональная информация</h1>
        <div className="personal-form">
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
      </div>
    );
  }

  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const { name, value } = event.target;

    onChangeForm(name, value);
  };
}
