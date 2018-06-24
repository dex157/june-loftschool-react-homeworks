import React, { Component } from 'react';
import './App.css';
import Step from '../Step';
import PersonalForm from '../PersonalForm/PersonalForm';
import CardForm from '../CardForm';

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
      return { step: state.step + 1 };
    });
  };

  handleTabClick = number => {
    this.setState({ step: number });
  };

  handleChangeForm = (key, value) => {
    this.setState({ [key]: value });
  };

  isFormCommitable = () => {
    switch (this.state.step) {
      case 1:
        return (
          this.state.firstName !== '' &&
          this.state.lastName !== '' &&
          this.state.email !== '' &&
          this.state.email.includes('@')
        );
      case 2:
        return this.state.cardNumber.length === 16;
      default:
        return false;
    }
  };

  renderForm = () => {
    switch (this.state.step) {
      case 1:
        return (
          <PersonalForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={this.state.cardNumber}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        break;
    }
  };

  render() {
    const formContent = this.renderForm(),
      tab = ['Personal information', 'Card information', 'Finish'];

    return (
      <div className="container">
        <div className="tab-panel">
          {tab.map((item, idx) => {
            const position = idx + 1;

            return (
              <Step
                key={item}
                isSelected={this.state.step === position ? true : false}
                isClickable={this.state.step === position ? false : true}
                number={position}
                onClick={this.handleTabClick}
              >
                {item}
              </Step>
            );
          })}
        </div>
        <div className="form-content">{formContent}</div>
        <div className="button-panel">
          <button className="button-next" onClick={this.handleClickNextForm}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
