import React, { Component } from 'react';
import Step from '../Step';

import './App.css';
import PersonalForm from '../PersonalForm/PersonalForm';

class App extends Component {
  state = {
    profileDataValid: false
  };

  updateProfileValidation = value => {
    this.setState({ profileDataValid: value });
  };

  render() {
    return (
      <div className="container">
        <Step />
        <PersonalForm updateProfileValidation={this.updateProfileValidation} />

        <div className="button-panel">
          <button
            className="button-next"
            disabled={!this.state.profileDataValid}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
