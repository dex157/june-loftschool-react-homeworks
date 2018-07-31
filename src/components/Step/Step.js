import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  handleClick = () => {
    const { isClickable, number, onClick } = this.props;

    if (isClickable) {
      onClick(number);
    }
  };

  render() {
    const { isSelected, isClickable, number, children } = this.props;

    return (
      <div
        className={
          isSelected
            ? 'step step-selected'
            : 'step' && isClickable
              ? 'step step-clickable'
              : 'step'
        }
        onClick={this.handleClick}
      >
        <p className={'step__number'}>{number}</p>
        <p className={'step__title'}>{children}</p>
      </div>
    );
  }
}

export default Step;
