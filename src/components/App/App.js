import React from 'react';
import './App.css';
import CardForm from '../CardForm';
import PersonalForm from '../PersonalForm';
import Step from '../Step';
import Title from '../Title';

class App extends React.Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };
  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
  };
  handleTabClick = step => {
    this.setState({ step: step });
  };
  handleChangeForm = (arg, val) => {
    this.setState({ [arg]: val });
  };
  isFormCommitable = () => {
    if (this.state.step === 1) {
      return (
        this.state.firstName !== '' &&
        this.state.lastName !== '' &&
        this.state.email !== '' &&
        this.state.email.includes('@')
      );
    } else if (this.state.step === 2) {
      return this.state.cardNumber.length === 16;
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
    } else {
      return false;
    }
  };
  render() {
    return (
      <div className="container">
        <div className="tab-panel">
          {['Personal information', 'Card information', 'Finish'].map(
            (value, index) => (
              <Step
                key={value}
                children={value}
                number={++index}
                isSelected={this.state.step === index}
                onClick={this.handleTabClick}
                isClickable={index < this.state.step || this.isFormCommitable()}
              />
            )
          )}
        </div>
        <Title />
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
}

export default App;
