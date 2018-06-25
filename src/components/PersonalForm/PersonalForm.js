import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {

  handleChangeForm = event => {
    const {onChangeForm} = this.props;
    if (onChangeForm) {
      onChangeForm(event.target.name, event.target.value);
    }
  };

  render() {
    return (
      <div data-test="personal-form" className="personal-form">
        <h1 className="title">Персональная информация</h1>
        <input
          name="firstName"
          placeholder="firstName"
          onChange={this.handleChangeForm}
        />
        <input
          name="lastName"
          placeholder="lastName"
          onChange={this.handleChangeForm}
        />
        <input
          name="email"
          placeholder="email"
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
