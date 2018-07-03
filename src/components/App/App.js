import React, { Component } from 'react';
import './App.css';
import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    const { budget } = this.props;
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
