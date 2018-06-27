import React from 'react';
import './PersonalForm.css';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(event) {
    const { name, value } = event.target;
    this.props.onChangeForm(name, value);
  }

  render() {
    const {firstName, lastName, email} = this.props;
    return (
      <form className="personal-form" data-test="personal-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          className="form-input"
          onChange={this.handleChangeForm}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          className="form-input"
          onChange={this.handleChangeForm}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          className="form-input"
          onChange={this.handleChangeForm}
        />
      </form>
    );
  }
}

export default PersonalForm;
