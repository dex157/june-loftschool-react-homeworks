import React, { Component } from 'react';
import './App.css';
import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';
//import Order from '../Order/Order';

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
