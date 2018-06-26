import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  render() {
    // const propKeysArr = Object.keys(this.props).slice(0, 3);
    const { firstName, lastName, email } = this.props;

    return (
      <div className="personal-form" data-test="personal-form">
        <h1 className="title">Персональная информация</h1>
        {/* {propKeysArr.map(fieldName => (
          <input
            key={fieldName}
            name={fieldName}
            value={this.props[fieldName]}
            placeholder={~fieldName.indexOf('N') ? `${fieldName[0].toUpperCase()}${fieldName.slice(1, fieldName.indexOf('N'))} ${fieldName.slice(fieldName.indexOf('N')).toLowerCase()}` : `${fieldName[0].toUpperCase()}${fieldName.slice(1)}`}
            onChange={this.handleChangeForm}
          />
        ))} */}
        <input
          name="firstName"
          value={firstName}
          placeholder="First name"
          onChange={this.handleChangeForm}
        />
        <input
          name="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={this.handleChangeForm}
        />
        <input
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
