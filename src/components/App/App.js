import React, { Component } from 'react';
import Step from '../Step/Step';
import Title from '../Title/Title';
import PersonalForm from '../PersonalForm/PersonalForm';
import CardForm from '../CardForm/CardForm';

import './App.css';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  //Вызывается сразу же после вызова функции render и монтировании компонента к DOM
  componentDidMount() {
    console.log('DidMount - App');
  }

  //Вызывается перед тем, как компонент отмонтируется от DOM и будет уничтожен
  componentWillUnmount() {
    console.log('WillUnmount - App');
  }
  //Вызывается сразу после render. Не вызывается после первого вызова render.
  componentDidUpdate() {
    console.log('DidUpdate - App');
  }

  handleChangeForm = (field, value) => {
    this.setState({ [field]: value });
    console.log(field, value);
  };

  updateProfileValidation = value => {
    this.setState({ profileDataValid: value });
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

  handleTabClick = step => {
    this.setState({ step });
  };

  handleClickNextForm = () => {
    this.setState(state => ({
      ...state,
      step: state.step + 1
    }));
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
    const stepsList = ['Personal Information', 'Card Information', 'Finish'];
    const { step } = this.state;

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
          <Title />
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

export default App;
