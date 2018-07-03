import React, { Component } from 'react';
import './App.css';
import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  budget: state.budget
});

const mapDispatchToProps = {};

export class App extends Component {
  render() {
    const { budget } = this.props;
    return (
      <div className="app">
        <Market />
        <Farm />
        <Budget budget={budget} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
