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
  handleTabClick = () => {};
  handleChangeForm = () => {};
  handleClickNextForm = () => {};
  isFormCommitable = () => {};
  renderForm = () => {};

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
