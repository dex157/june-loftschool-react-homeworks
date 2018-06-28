import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
  state = {};

  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  render() {
    return (
      <div className="personal-form">
        <input
          name="firstName"
          onChange={this.handleChangeForm}
          placeholder="First Name"
          value={this.props.firstName}
        />
        <input
          name="lastName"
          onChange={this.handleChangeForm}
          placeholder="Last Name"
          value={this.props.lastName}
        />
        <input
          name="email"
          onChange={this.handleChangeForm}
          placeholder="email"
          value={this.props.email}
        />
      </div>
    );
  }
}

export default PersonalForm;
