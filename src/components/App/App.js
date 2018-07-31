import React from 'react';
import PersonalForm from 'components/PersonalForm';
import CardForm from 'components/CardForm';
import Step from 'components/Step';
import './App.css';

class App extends React.Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    stepsName: ['Personal information', 'Card information', 'Finish']
  };

  handleTabClick = step => {
    this.setState(state => ({ ...state, step }));
  };

  handleChangeForm = (name, value) => {
    this.setState(state => ({ ...state, [name]: value }));
  };

  handleClickNextForm = () => {
    this.setState(state => ({ ...state, step: this.state.step + 1 }));
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
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        console.log('ошибка в renderForm');
    }
  };

  render() {
    const { step, stepsName } = this.state;

    return (
      <div className={'container'}>
        <div className={'tab-panel'}>
          {stepsName.map((stepName, id) => (
            <Step
              key={stepName}
              number={++id}
              isSelected={step === id}
              isClickable={id < step}
              onClick={this.handleTabClick}
            >
              {stepName}
            </Step>
          ))}
        </div>
        <div className={'form-content'}>{this.renderForm()}</div>
        <div className={'button-panel'}>
          <button
            className={'button-next'}
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
