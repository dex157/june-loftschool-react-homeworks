import React from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import Title from '../Title';
import './App.css';

const SUCCESS_MESSAGE = 'Поздравляем!';

const STEPS = [
  {
    id: 1,
    title: 'Personal information'
  },
  {
    id: 2,
    title: 'Card information'
  },
  {
    id: 3,
    title: 'Finish'
  }
];

class App extends React.Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    isNextDisabled: true
  };

  constructor(props) {
    super(props);

    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleClickNextForm() {
    this.setState(
      {
        step: this.state.step + 1
      },
      this.updateButtonState
    );
  }

  handleTabClick(step) {
    if (!step) {
      return;
    }

    this.setState(
      {
        step: step
      },
      this.updateButtonState
    );
  }

  updateButtonState() {
    this.setState({
      isNextDisabled: !this.isFormCommitable()
    });
  }

  handleChangeForm(param1, param2) {
    if (!param1 || param2 === undefined) {
      return;
    }

    this.setState(
      {
        [param1]: param2
      },
      this.updateButtonState
    );
  }

  isFormCommitable() {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        return (
          firstName !== '' &&
          lastName !== '' &&
          email !== '' &&
          email.includes('@')
        );
      case 2:
        return cardNumber.replace(/\s/g, '').length === 16;
      default:
        return false;
    }
  }

  renderForm() {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      default:
        return <p data-test="congratulations">{SUCCESS_MESSAGE}</p>;
    }
  }

  render() {
    const { step, isNextDisabled } = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          {Object.keys(STEPS).map(item => {
            return (
              <Step
                key={STEPS[item].id}
                isSelected={STEPS[item].id === step}
                isClickable={STEPS[item].id < step}
                number={STEPS[item].id}
                onClick={() => {
                  this.handleTabClick(STEPS[item].id);
                }}
              >
                {STEPS[item].title}
              </Step>
            );
          })}
        </div>
        <Title text="Personal Information" />
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={() => {
              this.handleClickNextForm();
            }}
            disabled={isNextDisabled}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
