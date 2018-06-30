import React, { Fragment } from "react";
import PersonalForm from "../PersonalForm";
import CardForm from "../CardForm";
import Title from "../Title";

import "./App.css";

export default class App extends React.Component {
  state = {
    cardNumber: "",
    email: "",
    firstName: "",
    lastName: "",
    step: 1
  };

  render() {
    return <div id="container">
      <Title step={this.state.step} handleTabClick={this.handleTabClick}/>

      {this.renderForm()}

      <div className="button-panel">
        <button
          className="button-next"
          onClick={this.handleClickNextForm}
          disabled={!this.isFormCommitable()}
        >
          Дальше >
        </button>
      </div>
    </div>;
  }

  //

  isFormCommitable = () => {
    const { firstName, lastName, email, cardNumber, step } = this.state;

    if (step === 1) return !!firstName && !!lastName && !email.indexOf("@");
    if (step === 2) return /\d{16}/.test(cardNumber);
    return false;
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    return <div className="form-content">
      {step === 1 && <PersonalForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        onChange={this.handleChangeForm}
      />}
      {step === 2 && <CardForm
        cardNumber={cardNumber}
        onChange={this.handleChangeForm}
      />}
      {step === 3 && <h1 data-test="congratulations">Поздравляем!</h1>}
    </div>;
  };

  handleTabClick = step => {
    this.setState({
      step
    });
  };

  handleClickNextForm = event => {
    this.setState((prevState) => ({
      step: prevState.step < 3 ? prevState.step + 1 : prevState.step
    }));
  };

  handleChangeForm = (name, value) => {
    this.setState({
      [name]: value
    });
  };
}