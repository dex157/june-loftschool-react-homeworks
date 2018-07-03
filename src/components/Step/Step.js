import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  handleClick = () => {
    let number = this.props.number;
    if (this.props.isClickable) {
      this.props.onClick(number);
    }
  };

  render() {
    const { isClickable, isSelected, number } = this.props;
    return (
      <div
        className={`step ${(isSelected && 'step-selected') ||
          ''} ${(isClickable && 'step-clickable') || ''}`}
        value={number}
        onClick={this.handleClick}
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{this.props.children}</p>
      </div>
    );
  }
}

export default Step;
