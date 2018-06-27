import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  handleClick = event => {
    const { isClickable, number } = this.props;
    if (isClickable) {
      this.props.onClick(number);
    }
  };

  render() {
    const { number, children, isSelected, isClickable } = this.props;
    return (
      <div
        className={`step 
          ${isClickable && 'step-clickable'} 
          ${isSelected && 'step-selected'}`}
        onClick={this.handleClick}
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }
}

export default Step;
