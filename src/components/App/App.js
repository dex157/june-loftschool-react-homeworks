import React, { Component } from 'react';
import './App.css';
import PersonalForm from 'components/PersonalForm/';
import CardForm from 'components/CardForm/';
import Step from '../Step/Step';
import Title from 'components/Title/';

export default class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };
  render() {
    const { step } = this.state;
    const steps = ['Personal information', 'Card information', 'Finish'];
    return (
      <div className="container">
        <div className="tab-panel">
          {steps.map((name, index) => {
            return (
              <Step
                isClickable={step > index + 1}
                isSelected={step === index + 1}
                number={index + 1}
                key={name}
                onClick={this.handleTabClick}
              >
                {name}
              </Step>
            );
          })}
        </div>
        <div className="form-content">
          <Title step={step} />
          {this.renderForm()}
        </div>
        <div className="button-panel">
          <button
            className="button-next"
            disabled={!this.isFormCommitable()}
            onClick={this.handleClickNextForm}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  handleClickNextForm = () => {
    this.setState(state => ({
      step: this.state.step + 1
    }));
  };

  handleTabClick = index => {
    this.setState({
      step: index
    });
  };

  handleChangeForm = (name, value) => {
    this.setState({ [name]: value });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    switch (step) {
      case 1:
        return (
          firstName !== '' &&
          lastName !== '' &&
          email !== '' &&
          email.includes('@')
        );

      case 2:
        return cardNumber.length === 16;

      default:
        return false;
    }
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    switch (step) {
      case 1:
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
          />
        );
      default:
        return <p data-test="congratulations">Поздравляем!</p>;
    }
  };
}
