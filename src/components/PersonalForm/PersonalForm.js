import React, { Component } from 'react';
import Title from '../Title';

import './PersonalForm.css';

class PersonalForm extends Component {
  state = {
    valid: {
      firstName: false,
      lastName: false,
      eMail: false
    }
  };

  handleTextInput = e => {
    const { name, value } = e.target;

    if (value.length < 20 && 0 < value.length) {
      this.setState(state => ({
        valid: {
          ...state.valid,
          [name]: true
        }
      }));
    } else {
      this.setState(state => ({
        valid: {
          ...state.valid,
          [name]: false
        }
      }));
    }
  };

  handleMailInput = e => {
    const { name, value } = e.target;
    if (name === 'eMail' && value.toString().indexOf('@') >= 0) {
      this.setState(state => ({
        valid: {
          ...state.valid,
          [name]: true
        }
      }));
    } else {
      this.setState(state => ({
        valid: {
          ...state.valid,
          [name]: false
        }
      }));
    }
  };

  componentDidUpdate(prevProps) {
    console.log(this.state.valid.firstName);
    console.log(this.state.valid.lastName);
    console.log(this.state.valid.eMail);
    console.log(this.state);
  }

  render() {
    return (
      <div className="form-content">
        <div className="personal-form">
          <Title />
          <div className="personal-form">
            <input
              name="firstName"
              placeholder="First name"
              onChange={this.handleTextInput}
            />
            <input
              name="lastName"
              placeholder="Last name"
              onChange={this.handleTextInput}
            />
            <input
              name="eMail"
              placeholder="E-mail"
              onChange={this.handleMailInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalForm;
