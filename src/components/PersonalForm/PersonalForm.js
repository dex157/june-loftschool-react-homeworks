import React, { Component, Fragment } from 'react';
import './PersonalForm.css';

export default class PersonalForm extends Component {
  handleChangeForm = e => {
    const { onChangeForm } = this.props,
      name = e.target.name,
      value = e.target.value;

    onChangeForm(name, value);
  };

  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <Fragment>
        <h1 className="title">Персональная информация</h1>
        <form className="personal-form" data-test="personal-form">
          <input
            type="text"
            name="firstName"
            onChange={this.handleChangeForm}
            value={firstName}
            placeholder="First name"
          />
          <input
            type="text"
            name="lastName"
            onChange={this.handleChangeForm}
            value={lastName}
            placeholder="Last name"
          />
          <input
            type="text"
            name="email"
            onChange={this.handleChangeForm}
            value={email}
            placeholder="Email"
          />
        </form>
      </Fragment>
    );
  }
}
