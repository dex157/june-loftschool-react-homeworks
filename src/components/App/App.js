import React, { Component, Fragment } from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';

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
        <div className="container">
          <div className="tab-panel">
            <div className="form-content">
              <div className="button-panel">
                <button
                  className="button-next"
                  onClick={this.handleClickNextForm}
                >
                  Next
                  <Step />
                  {this.renderForm()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
