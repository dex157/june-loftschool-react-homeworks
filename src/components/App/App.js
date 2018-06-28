import React, { Component, Fragment } from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import Title from '../Title';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleClickNextForm = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  handleTabClick = step => {
    this.setState({
      step
    });
  };

  handleChangeForm = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  onClick = number => {
    console.log(number);
    this.setState({
      step: number
    });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        if (
          firstName !== '' &&
          lastName !== '' &&
          email !== '' &&
          email.includes('@')
        )
          return true;
        else if (
          firstName === '' &&
          lastName !== '' &&
          email !== '' &&
          email.includes('@')
        )
          return false;
        else if (
          firstName !== '' &&
          lastName === '' &&
          email !== '' &&
          email.includes('@')
        )
          return false;
        else if (
          firstName !== '' &&
          lastName !== '' &&
          email === '' &&
          email.includes('@')
        )
          return false;
        break;
      case 2:
        if (cardNumber.length === 16) return true;
        break;
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
    else if (step === 2)
      return (
        <CardForm
          cardNumber={cardNumber}
          onChangeForm={this.handleChangeForm}
          onChangeTimeOver={this.handleChangeTimeOver}
        />
      );
    else if (step === 3) return <p data-test="congratulations">Поздравляем!</p>;
  };

  render() {
    return (
      <Fragment>
        <Title />
        <div className="container">
          <div className="tab-panel">
            <Step
              isSelected={this.state.step === 1}
              number={1}
              onClick={this.onClick}
              isClickable={this.state.step !== 1}
            >
              Personal Info
            </Step>
            <Step
              isSelected={this.state.step === 2}
              number={2}
              onClick={this.onClick}
              isClickable={this.state.step !== 2}
            >
              Card Info
            </Step>
            <Step
              isSelected={this.state.step === 3}
              number={3}
              onClick={this.onClick}
              isClickable={this.state.step !== 3}
            >
              Done
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
      </Fragment>
    );
  }
}

export default App;
