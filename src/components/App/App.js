import React, { Component } from 'react';
import PersonalForm from 'components/PersonalForm';
import CardForm from 'components/CardForm';
import Step from 'components/Step';
import './App.css';

export class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleTabClick = step => {
    this.setState(state => ({ ...this.state, step }));
  };

  handleChangeForm = (inputName, inputValue) => {
    this.setState(state => ({ [inputName]: inputValue }));
  };

  handleClickNextForm = () => {
    this.setState(state => ({ ...this.state, step: this.state.step + 1 }));
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

  handleChangeTimeOver = () => {};

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
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        return false;
    }
  };

  render() {
    let { step } = this.state;
    let stepTitles = ['Personal information', 'Card information', 'Finish'];
    return (
      <div className="container">
        <div className="tab-panel">
          {stepTitles.map((title, i) => (
            <Step
              key={title}
              number={++i}
              isSelected={i === step}
              isClickable={i < step}
              children={title}
              onClick={this.handleTabClick}
            />
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

export default App;
