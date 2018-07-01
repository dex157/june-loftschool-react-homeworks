import React, { Component } from 'react';
import Title from '../Title';
import './PersonalForm.css';
class PersonalForm extends Component {
  handleChangeForm = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.props.onChangeForm(name, value);
  };
  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div className="personal-form" data-test="personal-form">
        <Title title={'Персональная информация'} />
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChangeForm}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChangeForm}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChangeForm}
          placeholder="Email"
        />
      </div>
    );
  }
}

export default PersonalForm;
