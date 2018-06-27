import React, { Component, Fragment } from 'react';

class PersonalForm extends Component {
  handleChangeForm(e) {
    this.props.onChangeForm(e.target.name, e.target.value);
  }

  render() {
    return (
      <Fragment>
        <form className="personal-form">
          <input name="firstName" onChange={e => this.handleChangeForm(e)} />
          <input name="lastName" onChange={e => this.handleChangeForm(e)} />
          <input name="email" onChange={e => this.handleChangeForm(e)} />
        </form>
      </Fragment>
    );
  }
}

export default PersonalForm;
