import React, { Fragment } from "react";
import PersonalForm from "../PersonalForm";
import CardForm from "../CardForm";
import Step from "../Step";

import "./App.css";

export default class App extends React.Component {
  state = {
    cardNumber: "",
    email: "",
    firstName: "",
    lastName: "",
    steps: ["Персональная информация", "Информация о карте", "Завершение"],
    step: 2
  };

  render() {
    const stepsComponent = (text, index) =>
      (
        <Step
          key={text}
          title={text}
          number={index + 1}
          isClickable={index + 1 < this.state.step}
          isSelected={index + 1 === this.state.step}
          onClick={this.handleTabClick}
        >
          {text}
        </Step>
      );

    return <Fragment>
      <div className="tab-panel">
        {this.state.steps.map((step, i) => stepsComponent(step, i))}
      </div>

      {this.renderPersonalForm()}

      <div className="button-panel">
        <button
          className="button-next"
          onClick={this.handleClickNextForm}
          disabled={!this.isFormCommitable()}
        >
          Дальше >
        </button>
      </div>
    </Fragment>;
  }

  //

  isFormCommitable = () => {
    const { firstName, lastName, email, cardNumber, step } = this.state;

    if (step === 1) return !!firstName && !!lastName && email.includes("@");
    if (step === 2) return /\d{16}/.test(cardNumber);
    return false;
  };

  renderPersonalForm = () => {
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
      {step === 3 && <h1>Поздравляем!</h1>}
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
    })
  }
}