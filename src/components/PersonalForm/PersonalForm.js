import React, { Component, Fragment } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm(e) {
    this.props.onChangeForm(e.target.name, e.target.value);
  }

  render() {
    return (
      <Fragment>
        <form className="personal-form">
          <input
            data-test="personal-form"
            name="firstName"
            onChange={e => this.handleChangeForm(e)}
            placeholder="First name"
            value={this.props.firstName}
          />
          <input
            data-test="personal-form"
            name="lastName"
            onChange={e => this.handleChangeForm(e)}
            placeholder="Last name"
            value={this.props.lastName}
          />
          <input
            data-test="personal-form"
            name="email"
            onChange={e => this.handleChangeForm(e)}
            placeholder="Email"
            value={this.props.email}
          />
        </form>
      </Fragment>
    );
  }
}

export default PersonalForm;
