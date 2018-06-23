import React, { PureComponent } from 'react';
import PersonalForm from 'components/PersonalForm';
import CardForm from 'components/CardForm';
import Step from 'components/Step';
import Title from 'components/Title';
import './App.css';

export default class App extends PureComponent {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleChangeForm = (field, value) => {
    this.setState({ [field]: value });
  };

  handleClickNextForm = () => {
    this.setState(state => ({
      ...state,
      step: state.step + 1
    }));
  };

  handleTabClick = step => {
    this.setState({ step });
  };

  isFormCommitable = () => {
    const { firstName, lastName, email, cardNumber, step } = this.state;

    switch (step) {
      case 1:
        const fieldsRequired = [firstName, lastName, email];
        return !fieldsRequired.includes('') && email.includes('@');
      case 2:
        return /\d{16}/.test(cardNumber);
      default:
        return false;
    }
  };

  renderForm = () => {
    const { firstName, lastName, email, cardNumber, step } = this.state;

    const personalForm = (
      <PersonalForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        onChangeForm={this.handleChangeForm}
      />
    );

    const cardForm = (
      <CardForm cardNumber={cardNumber} onChangeForm={this.handleChangeForm} />
    );

    const finish = <p data-test="congratulations">Поздравляем!</p>;

    return step === 1 ? personalForm : step === 2 ? cardForm : finish;
  };

  render() {
    const { step } = this.state;
    const stepsList = ['Personal information', 'Card information', 'Finish'];
    const stepsComponent = (text, index) => (
      <Step
        key={text}
        number={index}
        isClickable={index < step}
        isSelected={index === step}
        onClick={this.handleTabClick}
      >
        {text}
      </Step>
    );

    return (
      <div className="container">
        <div className="tab-panel">
          {stepsList.map((step, i) => stepsComponent(step, i + 1))}
        </div>

        <div className="form-content">
          <Title step={step} />
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
    );
  }
}
