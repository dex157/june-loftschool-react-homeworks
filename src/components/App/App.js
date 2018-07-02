import React, { PureComponent } from 'react';
import './App.css';
import PersonalForm from '../PersonalForm/PersonalForm';
import Step from '../Step/Step';
import CardForm from '../CardForm/CardForm';

export default class App extends PureComponent {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  render() {
    const { step } = this.state;

    return (
      <div className="container">
        <div className="tab-panel">
          <Step
            isSelected={step === 1}
            isClickable={step === 2 || step === 3}
            number={1}
            onClick={this.handleTabClick}
          >
            Personal information
          </Step>
          <Step
            isSelected={step === 2}
            isClickable={step === 3}
            number={2}
            onClick={this.handleTabClick}
          >
            Card information
          </Step>
          <Step
            isSelected={step === 3}
            number={3}
            onClick={this.handleTabClick}
          >
            Finish
          </Step>
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

  renderForm() {
    const state = this.state;

    console.log(state);

    if (state.step === 1) {
      return (
        <PersonalForm
          firstName={state.firstName}
          lastName={state.lastName}
          email={state.email}
          onChangeForm={this.handleChangeForm}
        />
      );
    }

    if (state.step === 2) {
      return (
        <CardForm
          cardNumber={state.cardNumber}
          onChangeForm={this.handleChangeForm}
        />
      );
    }

    return <p data-test="congratulations">Поздравляем!</p>;
  }

  handleClickNextForm = () => {
    this.setState(state => ({ step: state.step + 1 }));
  };

  handleTabClick = nextStep => {
    this.setState({ step: nextStep });
    console.log(this.state);
  };

  handleChangeForm = (fieldName, name) => {
    this.setState({ [fieldName]: name });
  };

  isFormCommitable = () => {
    const state = this.state;

    if (state.step === 1) {
      return (
        state.firstName !== '' &&
        state.lastName !== '' &&
        state.email !== '' &&
        state.email.includes('@')
      );
    }

    if (state.step === 2) {
      return state.cardNumber.length === 16;
    }

    return false;
  };
}
