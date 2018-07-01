import React, { Component } from 'react';
import './App.css';
import PersonalForm from '../PersonalForm/PersonalForm';
import CardForm from '../CardForm/CardForm';
import Step from '../Step/Step';
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
    this.setState(prevState => {
      return { step: prevState.step + 1 };
    });
  };

  handleTabClick = tab => {
    this.setState(prevState => {
      return { step: tab };
    });
  };

  handleChangeForm = (field, value) => {
    this.setState(prevState => {
      return { [field]: value };
    });
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
    } else if ((this.state.step !== 1) | 2) {
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
        />
      );
    } else if (this.state.step === 3) {
      return <p data-test="congratulations">Поздравляем!</p>;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="tab-panel">
            <Step
              isSelected={this.state.step === 1}
              isClickable={this.state.step === 2 || this.state.step === 3}
              onClick={this.handleTabClick}
              number={1}
            >
              Personal Information
            </Step>
            <Step
              isSelected={this.state.step === 2}
              isClickable={this.state.step === 3}
              onClick={this.handleTabClick}
              number={2}
            >
              Card Information
            </Step>
            <Step
              isSelected={this.state.step === 3 ? true : false}
              isClickable={false}
              onClick={this.handleTabClick}
              number={3}
            >
              Finish
            </Step>
          </div>
          <div className="form-content">
            <Title step={this.state.step} />
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
      </React.Fragment>
    );
  }
}

export default App;
