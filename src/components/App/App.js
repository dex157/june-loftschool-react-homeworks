import React, { Component } from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import './App.css';

export default class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleClickNextForm = e => {
    const { step } = this.state;
    this.setState(() => ({
      step: step >= 3 ? 3 : step + 1
    }));
  };

  handleTabClick = step => {
    this.setState(() => ({
      step
    }));
  };

  handleChangeForm = (name, value) => {
    this.setState(() => ({
      [name]: value
    }));
  };

  renderForm = () => {
    switch (this.state.step) {
      case 1:
        return (
          <PersonalForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={this.state.cardNumber}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        return (
          <PersonalForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
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

  render() {
    const isSelected = number => {
      if (number === this.state.step) {
        return true;
      }
      return false;
    };

    const isClickable = number => {
      if (number < this.state.step) {
        return true;
      }
      return false;
    };
    const tabs = [
      { number: 1, title: 'Personal information' },
      { number: 2, title: 'Card information' },
      { number: 3, title: 'Finish' }
    ];

    return (
      <div className="container">
        <div className="tab-panel">
          {tabs.map(tab => {
            const { number, title } = tab;
            return (
              <Step
                key={number}
                onClick={this.handleTabClick}
                isClickable={isClickable(number)}
                isSelected={isSelected(number)}
                number={number}
              >
                {title}
              </Step>
            );
          })}
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
