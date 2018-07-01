import React, { Component } from 'react';
import './PersonalForm.css';
import Title from 'components/Title';

export default class PersonalForm extends Component {
  handleChangeForm = element => {
    const { name, value } = element.target;
    this.props.onChangeForm(name, value);
  };

  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div data-test="personal-form">
        <Title title="Персональная информация" />
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
      </div>
    );
  }
}
