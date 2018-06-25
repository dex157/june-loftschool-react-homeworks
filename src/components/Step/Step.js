import React, { Component } from 'react';
import './Step.css';

export default class Step extends Component {
  render() {
    const { isSelected, isClickable, number, children } = this.props;
    let className = 'step';
    if (isSelected) className += ' step-selected';
    if (isClickable) className += ' step-clickable';

    return (
      <div className={className} onClick={this.handleClick}>
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }

  handleClick = () => {
    const { isClickable, number, onClick } = this.props;

    if (isClickable) onClick(number);
  };
}
