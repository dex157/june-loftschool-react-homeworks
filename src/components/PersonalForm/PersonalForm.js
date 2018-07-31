import React, { Component } from 'react';
import './PersonalForm.css';
import Title from '../Title';

class PersonalForm extends Component {
  handleChangeForm = event => {
    const e = event.target;
    this.props.onChangeForm(e.name, e.value);
  };

  render() {
    const itemList = {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email'
    };
    return (
      <div className="personal-form" data-test="personal-form">
        <Title>Персональная информация</Title>
        {Object.keys(itemList).map(itemName => (
          <input
            key={itemName}
            name={itemName}
            value={this.props[itemName]}
            placeholder={itemList[itemName]}
            onChange={this.handleChangeForm}
          />
        ))}
      </div>
    );
  }
}

export default PersonalForm;
