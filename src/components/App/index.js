import React, { Component } from 'react';
import Step from '../Step';
import Title from '../Title';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import './App.css';
class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    steps: [
      {
        title: 'Personal information',
        name: 'Персональная информация'
      },
      {
        title: 'Card information',
        name: 'Номер карты'
      },
      {
        title: 'Finish'
      }
    ]
  };
  handleClickNextForm = event => {
    this.setState({ step: this.state.step + 1 });
  };
  handleTabClick = stepValue => {
    this.setState({ step: stepValue });
  };
  handleChangeForm = (key, value) => {
    this.setState({ [key]: value });
  };
  isFormCommitable = step => {
    if (!step) step = this.state.step;
    if (
      step === 1 &&
      this.state.firstName !== '' &&
      this.state.lastName !== '' &&
      this.state.email !== '' &&
      this.state.email.includes('@')
    ) {
      return true;
    } else if (step === 2 && this.state.cardNumber.length === 16) {
      return true;
    } else {
      return false;
    }
  };
  renderForm = () => {
    const step = this.state.step;
    if (step === 1) {
      return (
        <PersonalForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (step === 2) {
      return (
        <CardForm
          cardNumber={this.state.cardNumber}
          onChangeForm={this.handleChangeForm}
          onChangeTimeOver={this.handleChangeTimeOver}
        />
      );
    } else if (step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>;
    }
  };

  render() {
    const step = this.state.step > 0 ? this.state.step - 1 : 0;
    const stepsData = this.state.steps;

    return (
      <div className="container">
        <div className="tab-panel">
          {stepsData.map((stepItem, key) => (
            <Step
              onClick={this.handleTabClick}
              key={key + 1}
              number={key + 1}
              isSelected={step === key && true}
              isClickable={this.isFormCommitable(key + 1) && true}
            >
              {stepItem.title}
            </Step>
          ))}
        </div>
        <div className="form-content">
          <div data-test="personal-form">
            {stepsData[step] && stepsData[step].name && <Title>{stepsData[step].name}</Title>}
            {this.renderForm()}
          </div>
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
}

export default App;
