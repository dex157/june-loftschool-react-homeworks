import React, { Component } from 'react';
import './App.css';
import CardForm from '../CardForm/CardForm';
import Title from '../Title/Title';
import PersonalForm from '../PersonalForm/PersonalForm';
export default class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };
  handleTabClick = argument => {
    this.setState({ step: argument });
  };

  handleChangeForm = (first, second) => {
    this.setState(state => {
      state[first] = second;
    });
  };
  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
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
    }

    return false;
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
        <div className="tab-panel" />
        <div className="form-content" />
        <div className="button-panel">
          <button className="button-next" onClick={this.handleClickNextForm} />
        </div>

        <Title />
        <CardForm />
        <PersonalForm />
      </div>
    );
  }
}
// if (
// this.state.firstName !== '' &&
// this.state.lastName !== '' &&
// this.state.email !== '' &&
// this.state.email.includes('@')
// ) {
//   return true;
// } else if (
//   this.state.firstName !== '' &&
//   this.state.lastName === '' &&
//   this.state.email !== '' &&
//   this.state.email.includes('@')
// ) {
//   return false;
// } else if (
//   this.state.firstName !== '' &&
//   this.state.lastName === '' &&
//   this.state.email !== '' &&
//   this.state.email.includes('@')
// ) {
//   return false;
// } else if (
//   this.state.firstName !== '' &&
//   this.state.lastName !== '' &&
//   this.state.email === '' &&
//   this.state.email.includes('@')
// ) {
//   return false;
// }
