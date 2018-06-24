import React, { Component } from 'react';
import CardForm from 'components/CardForm/';
import PersonalForm from 'components/PersonalForm/';
import Title from 'components/Title/';
import './App.css';
import Step from '../Step/Step';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleClickNextForm = () => {
    this.setState(state => ({
      step: this.state.step + 1
    }));
  };

  handleTabClick = step => {
    this.setState(() => ({
      step: step
    }));
  };

  handleChangeForm = (inputName, inputValue) => {
    this.setState({
      [inputName]: inputValue
    });
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

    if (step === 1)
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm}
        />
      );

    if (step === 2)
      return (
        <CardForm
          cardNumber={cardNumber}
          onChangeForm={this.handleChangeForm}
        />
      );

    if (step === 3) return <p data-test="congratulations">Поздравляем!</p>;
  };

  render() {
    const { step } = this.state;
    const stepList = ['Personal information', 'Card information', 'Finish'];

    return (
      <div className="container">
        <div className="tab-panel">
          {stepList.map((tabName, index) => {
            return (
              <Step
                isClickable={step > index + 1 ? true : false}
                isSelected={step === index + 1 ? true : false}
                number={index + 1}
                children={tabName}
                key={tabName}
                onClick={this.handleTabClick}
              >
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
