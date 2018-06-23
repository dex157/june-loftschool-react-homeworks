import React, { PureComponent } from 'react';
import './Step.css';

export default class Step extends PureComponent {
  handleClick = () => {
    const { isClickable, number } = this.props;

    if (!isClickable) {
      return;
    }

    this.props.onClick(number);
  };

  render() {
    const { number, children, isClickable, isSelected } = this.props;

    return (
      <div
        className={`step 
          ${isClickable && 'step-clickable'} 
          ${isSelected && 'step-selected'}`}
        onClick={this.handleClick}
      >
        <span className="step__number">{number}</span>
        <span className="step__title">{children}</span>
      </div>
    );
  }
}
