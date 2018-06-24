import React, { Component } from 'react';

import './Step.css';

class Step extends Component {
  state = {};
  render() {
    return (
      <div className="tab-panel">
        <div className="step step-selected">
          <p className="step__number">1</p>
          <p className="step__title">Personal Information</p>
        </div>
        <div className="step">
          <p className="step__number">2</p>
          <p className="step__title">Card Information</p>
        </div>
        <div className="step">
          <p className="step__number">3</p>
          <p className="step__title">Finish</p>
        </div>
      </div>
    );
  }
}

export default Step;
