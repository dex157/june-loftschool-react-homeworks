import React, { Component } from 'react';
import Title from '../Title';

import './PersonalForm.css';

class PersonalForm extends Component {
  state = {
    valid: {
      firstName: false,
      lastName: false,
      eMail: false
    },
    profileDataValid: false
  };

  handleProfileInput = e => {
    const { name, value } = e.target;
    if (name === 'eMail') {
      if (value.toString().indexOf('@') >= 0) {
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
    } else {
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
    }

    if (
      this.state.valid.firstName === true &&
      this.state.valid.lastName === true &&
      this.state.valid.eMail === true
    ) {
      this.setState(() => ({
        profileDataValid: true
      }));
    } else {
      this.setState(() => ({
        profileDataValid: false
      }));
    }

    // if (this.allTrue(this.state.valid)) {
    //   this.setState(() => ({
    //     profileDataValid: true
    //   }));
    // } else {
    //   this.setState(() => ({
    //     profileDataValid: false
    //   }));
    // }

    this.props.updateProfileValidation(this.state.profileDataValid);
  };

  allTrue(obj) {
    for (var o in obj) if (!obj[o]) return false;

    return true;
  }

  componentDidUpdate(prevProps) {
    console.log(this.state.valid.firstName);
    console.log(this.state.valid.lastName);
    console.log(this.state.valid.eMail);
    console.log(this.state.profileDataValid);
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
              onChange={this.handleProfileInput}
            />
            <input
              name="lastName"
              placeholder="Last name"
              onChange={this.handleProfileInput}
            />
            <input
              name="eMail"
              placeholder="E-mail"
              onChange={this.handleProfileInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalForm;
