import React, { Component } from 'react';
import Step from '../Step';

import './App.css';
import PersonalForm from '../PersonalForm/PersonalForm';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Step />
        <PersonalForm />

        <div className="button-panel">
          <button className="button-next" disabled>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
