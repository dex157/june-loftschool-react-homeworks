import React from 'react';
import './PersonalForm.css';

class PersonalForm extends React.Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };
  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div className="personal-form" data-test="personal-form">
        <input
          type="text"
          name="firstName"
          onChange={this.handleChangeForm}
          value={firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={this.handleChangeForm}
          value={lastName}
        />
        <input
          type="text"
          name="email"
          onChange={this.handleChangeForm}
          value={email}
        />
      </div>
    );
  }
}

export default PersonalForm;
