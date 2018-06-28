import React, { Component } from 'react';
import './App.css';
import Step from 'components/Step';
import CardForm from 'components/CardForm';
import PersonalForm from 'components/PersonalForm';

export default class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleClickNextForm = () => {
    this.setState(state => {
      return {
        step: state.step + 1
      };
    });
  };

  handleTabClick = arg => {
    this.setState(() => {
      return { step: arg };
    });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    if (
      step === 1 &&
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      email.includes('@')
    ) {
      return true;
    } else if (step === 2 && cardNumber.length === 16) {
      return true;
    } else {
      return false;
    }
  };

  handleChangeForm = (arg1, arg2) => {
    this.setState(() => {
      return {
        [arg1]: arg2
      };
    });
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
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        return null;
    }
  };

  render() {
    const steps = [
      { number: 1, children: 'Personal information' },
      { number: 2, children: 'Card information' },
      { number: 3, children: 'Finish' }
    ];

    return (
      <div className="container">
        <div className="tab-panel">
          {steps.map(element => {
            return (
              <Step
                key={element.number}
                number={element.number}
                isSelected={this.state.step === element.number}
                isClickable={this.state.step > element.number}
                onClick={this.handleTabClick}
              >
                {element.children}
              </Step>
            );
          })}
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            disabled={!this.isFormCommitable()}
            onClick={this.handleClickNextForm}
            className="button-next"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
