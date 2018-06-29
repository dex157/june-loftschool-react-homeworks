import React, { Fragment } from "react";
import "./Title.css";

export default class Title extends React.Component {
  render() {
    return <div className="tab-panel">
      <div className="step">
        <p className="step__number">1</p>
        <p className="step__title">Personal information</p>
      </div>
      <div className="step">
        <p className="step__number">2</p>
        <p className="step__title">Card information</p>
      </div>
      <div className="step">
        <p className="step__number">3</p>
        <p className="step__title">Finish</p>
      </div>
    </div>;
  }
}