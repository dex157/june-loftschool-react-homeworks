import React from "react";
import Step from "../Step"
import "./Title.css";

export default class Title extends React.Component {
  state = {
    steps: ["Персональная информация", "Информация о карте", "Завершение"],
  };

  render() {
    const stepsComponent = (text, index) =>
      (
        <Step
          key={text}
          title={text}
          number={index + 1}
          isClickable={index + 1 < this.props.step}
          isSelected={index + 1 === this.props.step}
          onClick={this.props.handleTabClick}
        >
          {text}
        </Step>
      );

    return <div className="tab-panel">
      {this.state.steps.map((step, i) => stepsComponent(step, i))}
    </div>;
  }
}