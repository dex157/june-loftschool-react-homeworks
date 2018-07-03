import React, { Component } from 'react';
import './App.css';
import Step from '../Step';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    steps: ['Personal information', 'Card information', 'Finish']
  };

  handleTabClick = step => {
    this.setState({ step: step });
  };

  handleChangeForm = (name, value) => {
    this.setState({ [name]: value });
  };

  handleClickNextForm = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    if (step === 1) {
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (step === 2) {
      return (
        <CardForm
          cardNumber={cardNumber}
          onChangeForm={this.handleChangeForm}
          onChangeTimeOver={this.handleChangeTimeOver}
        />
      );
    } else if (step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>;
    }
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    if (step === 1) {
      if (
        firstName !== '' &&
        lastName !== '' &&
        email !== '' &&
        email.includes('@')
      ) {
        return true;
      }
    } else if (step === 2) {
      if (cardNumber.length === 16) {
        return true;
      }
    }
    return false;
  };

  render() {
    const { step, steps } = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          {steps.map((title, key) => {
            key++;
            return (
              <Step
                key={key}
                number={key}
                isSelected={step === key}
                isClickable={step > key}
                onClick={this.handleTabClick}
              >
                {title}
              </Step>
            );
          })}
        </div>
        <div className="form-content">{this.renderForm()}</div>
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
}

export default App;
