import React, { Component } from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import Title from '../Title';
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

  onChangeForm = e => {
    const name = e.target.name;
    const val = e.target.value;
    this.setState(() => ({
      [name]: val
    }));
  };
  renderForm = () => {
    const { firstName, lastName, email, cardNumber } = this.state;
    const personalForm = (
      <PersonalForm
        email={email}
        lastName={lastName}
        firstName={firstName}
        Title={Title}
        onChangeForm={this.handleChangeForm}
      />
    );

    const cardForm = (
      <CardForm
        {...cardNumber}
        onChangeForm={this.handleChangeForm}
        Title={Title}
      />
    );
    const congrats = <h1>Поздравляем!</h1>;
    switch (this.state.step) {
      case 1:
        return personalForm;
      case 2:
        return cardForm;
      case 3:
        return congrats;
      default:
        return personalForm;
    }
  };
  isFormCommitable = () => {
    const { firstName, lastName, email, cardNumber, step } = this.state;
    const step1 = firstName !== '' && lastName !== '' && email.includes('@');
    const step2 = cardNumber.length === 16;
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

  handleClick = number => {};
  isSelected = number => {
    if (number === this.state.step) {
      return true;
    }
    return false;
  };
  render() {
    return (
      <div className="container">
        <div className="tab-panel">
          <Step currentStep={this.state.step} />
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
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
