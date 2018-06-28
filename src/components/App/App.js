import React, { Component } from 'react';
import './App.css';
import PersonalForm from '../PersonalForm/PersonalForm';
import Step from '../Step/Step';
import CardForm from '../CardForm/CardForm';
import Title from '../Title/Title';

class App extends Component {
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
  handleClickNextForm = () => {
    const step = this.state.step;
    this.setState({ step: step + 1 });
  };
  handleTabClick = step => {
    this.setState({ step });
  };
  handleChangeForm = (arg1, arg2) => {
    this.setState({ [arg1]: arg2 });
  };
  isFormCommitable = () => {
    const { cardNumber, lastName, firstName, email, step } = this.state;

    if (step === 1) {
      return (
        firstName !== '' &&
        lastName !== '' &&
        email !== '' &&
        email.includes('@')
      );
    } else if (step === 2) {
      return cardNumber.length === 16;
    } else return false;
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
    const stepsList = ['Personal information', 'Card information', 'Finish'];
    const stepsComponent = (text, index) => (
      <Step
        key={text}
        number={index}
        isClickable={true && index < this.state.step}
        isSelected={true && index === this.state.step}
        onClick={this.handleTabClick}
      >
        {text}
      </Step>
    );

    return (
      <div className="container">
        <div className="tab-panel">
          {stepsList.map((step, i) => stepsComponent(step, i + 1))}
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
