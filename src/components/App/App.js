import React, { Component} from 'react';
import PersonalForm from '../PersonalForm/PersonalForm';
import CardForm from '../CardForm/CardForm';
import './App.css';
import Step from '../Step/Step';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleClickNextForm = () => {
    this.setState(prevState => {
      return { step: prevState.step + 1 };
    });
  };

  handleTabClick = targetTabNumber => {
    this.setState(() => {
      return { step: targetTabNumber };
    });
  };

  handleChangeForm = (fieldName, fieldValue) => {
    this.setState(prevState => {
      let newState = JSON.parse(JSON.stringify(prevState));
      newState[fieldName] = fieldValue;
      return newState;
    });
  };

  isFormCommitable = () => {
    let currentState = this.state;
    switch (currentState.step) {
      case 1:
        return currentState.firstName !== '' &&
          currentState.lastName !== '' &&
          currentState.email !== '' &&
          currentState.email.includes('@');
      case 2:
        return currentState.cardNumber.length === 16;
      default:
        return false;
    }
  };

  renderForm = () => {
    let currentState = this.state;
    switch (currentState.step) {
      case 1:
        return (
          <PersonalForm
            firstName={currentState.firstName}
            lastName={currentState.lastName}
            email={currentState.email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={currentState.cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        return <h1>Что-то пошло не так</h1>;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="tab-panel">
          <Step isSelected={this.state.step === 1} number={1}>
            Персональная Информация
          </Step>
          <Step isSelected={this.state.step === 2} number={2}>Информация по карте</Step>
          <Step isSelected={this.state.step === 3} number={3}>Ну и хватит</Step>
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button className="button-next" onClick={this.handleClickNextForm} disabled={!this.isFormCommitable()}>Далее</button>
        </div>
      </div>
    );
  }
}

export default App;
