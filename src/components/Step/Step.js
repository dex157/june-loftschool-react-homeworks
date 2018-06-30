import React from "react";
import "./Step.css";

export default class Step extends React.Component {
  render() {
    const {  title, number,isClickable, isSelected } = this.props;

    return <div
      className={`step ${isClickable ? "step-clickable" : ""} ${isSelected ? "step-selected" : ""}`.replace(/\s+/g,' ')}
      onClick={this.handleClick}
    >
      <p className={"step__number"}>{number}</p>
      <p className="step__title">{title}</p>
    </div>;
  }

  handleClick = (event) => {
    const { onClick, isClickable, number } = this.props;

    if (isClickable && typeof onClick === "function") {
      onClick(number);
    }
  };
}