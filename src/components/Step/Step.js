import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  handleClick = () => {
    if (this.props.isClickable) {
      this.props.onClick(this.props.number);
    }
  };

  render() {
    const { isSelected, isClickable, number, children } = this.props;
    const stepClassName = isSelected
      ? 'step step-selected'
      : isClickable
        ? 'step step-clickable'
        : 'step';

    return (
      <div className={stepClassName} onClick={this.handleClick}>
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;
