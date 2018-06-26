import React, { Component } from 'react';
import Title from '../Title';
import './PersonalForm.css';

class PersonalForm extends Component {
  state = {
    correspondance: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email'
    }
  };

  handleChangeForm = event => {
    const { name, value } = event.target;
    this.props.onChangeForm(name, value);
  };

  render() {
    return (
      <div className="personal-form" data-test="personal-form">
        <Title>Персональная информация</Title>
        {Object.keys(this.state.correspondance).map(fieldname => (
          <input
            key={fieldname}
            name={fieldname}
            value={this.props[fieldname]}
            placeholder={this.state.correspondance[fieldname]}
            onChange={this.handleChangeForm}
          />
        ))}
      </div>
    );
  }
}

export default PersonalForm;
