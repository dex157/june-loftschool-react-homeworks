import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  handleClick = () => {
    const {isClickable, number, onClick} = this.props;
    if (isClickable) {
      if (onClick) {
        onClick(number);
      }
    }
  };

  render() {
    const {isSelected, isClickable, number, children} = this.props
    return (
      <div
        className={
          'step' +
          (isSelected
            ? ' step-selected'
            : isClickable
              ? ' step-clickable'
              : '')
        }
        onClick={this.handleClick}
      >
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;
