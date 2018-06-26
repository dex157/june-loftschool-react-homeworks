import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  state = {};
  handleClick = () => {
    const { onClick, isClickable, number } = this.props;
    if (isClickable) {
      onClick(number);
    }
    return false;
  };
  render() {
    const { isSelected, isClickable, number, children } = this.props; // Эти props передаются ребенку (Step) от родителя (App)
    return (
      <div
        className={`step ${isSelected ? 'step-selected' : ''} 
        ${isClickable ? 'step-clickable' : ''} `}
        onClick={this.handleClick} // При клике возвращает на шаг назад
      >
        <div className="step__number">{number}</div>
        <div className="step__title ">{children}</div>
      </div>
    );
  }
}

export default Step;
