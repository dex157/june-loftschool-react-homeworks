import React, { Component } from 'react';
import './PersonalForm.css';

export default class PersonalForm extends Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  render() {
    return (
      <div data-test="personal-form" className="personal-form">
        <input
          name="firstName"
          onChange={this.handleChangeForm}
          placeholder="First name"
        />
        <input
          name="lastName"
          onChange={this.handleChangeForm}
          placeholder="Last name"
        />
        <input
          name="email"
          onChange={this.handleChangeForm}
          placeholder="Email"
        />
      </div>
    );
  }
}
