import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      cardNumber: ''
    };
  }
  handleClickNextForm = e => {
    e.preventDefault();
    const { step } = this.state;
    this.setState(() => ({
      step: step >= 3 ? 3 : step + 1
    }));
  };

  handleTabClick = e => {
    e.preventDefault();
    const val = e.target.value;
    this.setState(() => ({
      step: val
    }));
  };

  isFormCommitable = () => {
    const { firstName, lastName, email, cardNumber, step } = this.state;
    const step1 = firstName !== '' && lastName !== '' && email.includes('@');
    const step2 = cardNumber.toString().length === 16;
    switch (step) {
      case 1:
        return step1;
      case 2:
        return step2;
      default:
        return false;
    }
  };

  handleChangeForm = e => {
    const val = e.target.value;
    const name = e.target.name;
    this.setState(() => ({
      [name]: val
    }));
  };
  render() {
    // const { firstName, lastName, cardNumber } = this.state;
    return (
      <div className="container">
        <div className="tab-pannel" />
        <div className="form-content" />
        <div className="button-pannel">
          <button
            onClick={this.handleClickNextForm}
            className="button-next"
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
