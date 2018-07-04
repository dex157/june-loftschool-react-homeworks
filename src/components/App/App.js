import React, { Component } from 'react';
import './App.css';
import Market from 'components/Market';
import Farm from 'components/Farm';
import Budget from 'components/Budget';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Market />
        <Farm />
        <Budget />
      </div>
    );
  }
}

export default App;
