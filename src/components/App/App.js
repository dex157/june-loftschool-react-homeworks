import React, { Component } from "react";
import "./App.css";
import PersonalForm from "../PersonalForm";
import CardForm from "../CardForm";
import Step from "../Step";

export default class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    stepName: ["Personal information", "Card information", "Finish"]
  };

  handleClickNextForm = () => {
    let step = this.state.step;

    if (this.isFormCommitable()) {
      this.setState({
        step: step + 1
      });
    } else {
      if (step === 1) {
        document.querySelector("[name=\"email\"]").focus();
      } else if (step === 2) {
        document.querySelector("[name=\"cardNumber\"]").focus();
      }
    }
  };

  handleTabClick = (step) => {
    this.setState({
      step: step
    });
  };

  handleChangeForm = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  isFormCommitable = () => {
    let step = this.state.step;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;
    let cardNumber = this.state.cardNumber;

    if (step === 1) {
      return firstName !== "" && lastName !== "" && email !== "" && email.includes("@");
    } else if (step === 2) {
      return cardNumber.length === 16;
    }
  };

  renderForm = () => {
    let step = this.state.step;

    if (step === 1) {
      return (
        <PersonalForm firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email}
                      onChangeForm={this.handleChangeForm}/>
      );
    } else if (step === 2) {
      return (
        <CardForm cardNumber={this.state.cardNumber} onChangeForm={this.handleChangeForm}
                  onChangeTimeOver={this.handleChangeTimeOver}/>
      );
    } else if (step === 3) {
      return (
        <p data-test="congratulations">Поздравляем!</p>
      );
    }
  };

  title = () => {
    let step = this.state.step;

    if (step === 1) {
      return "Персональная информация";
    } else if (step === 2) {
      return "Номер карты";
    } else if (step === 3) {
      return "";
    }

  };

  render() {
    let stepName = this.state.stepName;
    let step = this.state.step;
    let isSelected = (arg) => {
      return step === +arg + 1;
    };
    let isClickable = (arg) => {
      return step > +arg + 1;
    };

    return (
      <div className="container">
        <div className="tab-panel">
          {Object.keys(stepName).map(step => (
            <Step
              key={step}
              number={+step + 1}
              isSelected={isSelected(step)}
              isClickable={isClickable(step)}
              onClick={this.handleTabClick}
            >
              {stepName[step]}
            </Step>
          ))}
        </div>
        <div className="form-content">
          <div data-test="personal-form">
            <h1 className="title">
              {this.title()}
            </h1>
            {this.renderForm()}
          </div>
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
    );
  }
}