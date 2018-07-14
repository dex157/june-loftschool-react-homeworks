import React, { Component } from 'react';
import './App.css';
import CardForm from '../CardForm/CardForm';
import PersonalForm from '../PersonalForm/PersonalForm';
import Step from '../Step/Step';
export default class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    stepsTitle: ['Персональная информация', 'Номер карты', 'Finish']
  };
  handleTabClick = argument => {
    this.setState({ step: argument });
  };

  handleChangeForm = (first, second) => {
    this.setState({ [first]: second });
  };
  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
  };

  isFormCommitable = () => {
    if (this.state.step === 1) {
      if (
        this.state.firstName !== '' &&
        this.state.lastName !== '' &&
        this.state.email !== '' &&
        this.state.email.includes('@')
      ) {
        return true;
      }
    } else if (this.state.step === 2) {
      if (this.state.cardNumber.length === 16) {
        return true;
      }
    }

    return false;
  };

  renderForm = () => {
    if (this.state.step === 1) {
      return (
        <PersonalForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (this.state.step === 2) {
      return (
        <CardForm
          cardNumber={this.state.cardNumber}
          onChangeForm={this.handleChangeForm}
          onChangeTimeOver={this.handleChangeTimeOver}
        />
      );
    } else if (this.state.step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>;
    }
  };

  render() {
    const { step, stepsTitle } = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          {stepsTitle.map((stepsTitle, i) => (
            <Step
              key={i}
              number={i + 1}
              isSelected={step === i + 1}
              isClickable={step > i}
              onClick={this.handleTabClick}
            >
              {stepsTitle}
            </Step>
          ))}
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
