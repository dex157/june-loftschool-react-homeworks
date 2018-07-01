import React, { Component, Fragment } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm(e) {
    this.props.onChangeForm(e.target.name, e.target.value);
  }

  render() {
    return (
      <Fragment>
        <form className="personal-form" data-test="personal-form">
          <input
            name="firstName"
            onChange={e => this.handleChangeForm(e)}
            placeholder="First name"
            value={this.props.firstName}
          />
          <input
            name="lastName"
            onChange={e => this.handleChangeForm(e)}
            placeholder="Last name"
            value={this.props.lastName}
          />
          <input
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
