import React, { Component } from 'react';
import './Step.css';
export default class Step extends Component {
  handleClick = () => {
    const { number, isClickable } = this.props;
    if (isClickable) {
      return this.props.onClick(number);
    }
  };

  render() {
    const { number, children, isSelected, isClickable } = this.props;
    return (
      <div>
        <div
          className={`step 
          ${isClickable && 'step-clickable'} 
          ${isSelected && 'step-selected'}`}
          onClick={this.handleClick}
        />
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}
