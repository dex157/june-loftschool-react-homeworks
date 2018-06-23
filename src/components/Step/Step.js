import React, { Component } from 'react';
import './Step.css';

export default class Step extends Component {
  handleClick = () => {
    const { onClick, number, isClickable } = this.props;

    if (isClickable) onClick(number);
  };

  /**
   * Вычислить дополнительные классы для тега с классом step
   */
  calculateStepClassName = condition => {
    const tmpArray = [];

    for (let key in condition) {
      if (condition.hasOwnProperty(key) && condition[key]) {
        tmpArray.push('step-' + key.slice(2).toLowerCase());
      }
    }

    return tmpArray.join(' ');
  };

  render() {
    const { isSelected, isClickable, number } = this.props,
      stepClasses = this.calculateStepClassName({ isSelected, isClickable }),
      title = this.props.children;

    return (
      <div
        className={'step' + (stepClasses ? ` ${stepClasses}` : '')}
        onClick={this.handleClick}
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{title}</p>
      </div>
    );
  }
}
