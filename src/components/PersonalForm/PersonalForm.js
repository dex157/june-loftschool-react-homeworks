import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };

  render() {
    // const propKeysArr = Object.keys(this.props).filter(item => (item !== 'onChangeForm')); Почему при таком написании тесты не проходят???
    const propKeysArr = ['firstName', 'lastName', 'email'];

    return (
      <div className="personal-form" data-test="personal-form">
        <h1 className="title">Персональная информация</h1>
        {propKeysArr.map(item => (
          <input
            key={item}
            name={item}
            value={this.props[item]}
            placeholder={
              ~item.indexOf('N')
                ? `${item[0].toUpperCase()}${item.slice(
                    1,
                    item.indexOf('N')
                  )} ${item.slice(item.indexOf('N')).toLowerCase()}`
                : `${item[0].toUpperCase()}${item.slice(1)}`
            }
            onChange={this.handleChangeForm}
          />
        ))}
      </div>
    );
  }
}

export default PersonalForm;
