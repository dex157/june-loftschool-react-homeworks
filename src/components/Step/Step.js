import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  state = {
    step: 1
  };

  handleClick = () => {
    if (this.props.isClickable) {
      this.props.onClick(this.props.number);
    }
  };

  render() {
    const { isSelected, isClickable, children, number } = this.props;
    return (
      <div
        onClick={this.handleClick}
        className={`step ${isSelected ? 'step-selected' : ''}${
          isClickable ? 'step-clickable' : ''
        }`}
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }
}

export default Step;
