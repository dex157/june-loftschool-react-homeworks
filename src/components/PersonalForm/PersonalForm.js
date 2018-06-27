import React, { PureComponent, Fragment } from 'react';
import Title from '../Title';
import './PersonalForm.css';

class PersonalForm extends PureComponent {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const { name, value } = event.target;
    onChangeForm(name, value);
  };

  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <Fragment>
        <Title>Персональная информация</Title>
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
      </Fragment>
    );
  }
}

export default PersonalForm;
