import React, { Component } from 'react';
import './App.css';

import PersonalForm from './../PersonalForm';
import CardForm from './../CardForm';
import Step from './../Step';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleClickNextForm = () => {
    this.setState(state => {
      return { step: state.step < 3 ? state.step + 1 : 3};
    });
  };

  handleTabClick = num => {
    this.setState((state, props) => {
      return { step: num };
    });
  };

  handleChangeForm = (arg1, arg2) => {
    this.setState((state, props) => {
      return {
        [arg1]: arg2
      };
    });
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
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        break;
    }
  };

  isFormCommitable = () => {
    if (
      this.state.step === 1 &&
      this.state.firstName !== '' &&
      this.state.lastName !== '' &&
      this.state.email !== '' &&
      this.state.email.includes('@')
    ) {
      return true;
    } else if (this.state.step === 2 && this.state.cardNumber.length === 16) {
      return true;
    } 
  };

  render() {
    return (
      <div className="container">
        <div className="tab-panel">
          <Step isSelected isClickable onClick={this.handleTabClick} number={1}>Personal information</Step>
          <Step isClickable onClick={this.handleTabClick} number={2}>Card information</Step>
          <Step isClickable onClick={this.handleTabClick} number={3}>Finish information</Step>
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button disabled={!this.isFormCommitable()}
            className="button button-next"
            onClick={this.handleClickNextForm}
          >Next</button>
        </div>
      </div>
    );
  }
}

export default App;
