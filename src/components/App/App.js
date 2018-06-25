import React, { Component } from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import './App.css';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    stepCorrespondance: ['Personal Information', 'Card Information', 'Finish']
  };

  button = React.createRef();

  handleClickNextForm = () => {
    this.setState(state => ({
      step: ++state.step
    }));
  };

  handleTabClick = value => {
    this.setState(state => ({
      step: value
    }));
  };

  handleChangeForm = (firtstArg, secondArg) => {
    this.setState(state => ({
      [firtstArg]: secondArg
    }));
  };

  isFormCommitable = () => {
    if (this.state.step === 1) {
      if (
        this.state.firstName !== '' &&
        this.state.lastName !== '' &&
        this.state.email !== '' &&
        this.state.email.includes('@')
      ) {
        return true;
      }
    } else if (this.state.step === 2) {
      if (this.state.cardNumber.length === 16) {
        return true;
      }
    } else {
      return false;
    }
  };

  renderForm = () => {
    if (this.state.step === 1) {
      return (
        <PersonalForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (this.state.step === 2) {
      return (
        <CardForm
          cardNumber={this.state.cardNumber}
          onChangeForm={this.handleChangeForm}
          onChangeTimeOver={this.handleChangeTimeOver}
        />
      );
    } else if (this.state.step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="tab-panel">
          {this.state.stepCorrespondance.map((item, id) => (
            <Step
              key={item}
              number={++id}
              isSelected={true && id === this.state.step}
              isClickable={true && id < this.state.step}
              onClick={this.handleTabClick}
            >
              {item}
            </Step>
          ))}
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
