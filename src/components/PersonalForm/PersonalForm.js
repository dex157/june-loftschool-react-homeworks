import React, { Component } from 'react';

import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onChangeForm(name, value);
  };

  //Вызывается сразу же после вызова функции render и монтировании компонента к DOM
  componentDidMount() {
    console.log('DidMount - PersonalForm');
  }

  //Вызывается перед тем, как компонент отмонтируется от DOM и будет уничтожен
  componentWillUnmount() {
    console.log('WillUnmount - PersonalForm');
  }
  //Вызывается сразу после render. Не вызывается после первого вызова render.
  componentDidUpdate() {
    console.log('DidUpdate - PersonalForm');
  }

  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div className="personal-form" data-test="personal-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={this.handleChangeForm}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={this.handleChangeForm}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
