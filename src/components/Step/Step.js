import React from 'react';
import './Step.css';

class Step extends React.Component {
  handleClick = () => {
    const { isClickable, onClick, number } = this.props;
    if (isClickable) onClick(number);
  };
  render() {
    const { isSelected, isClickable, number, children } = this.props;
    return (
      <div
        onClick={this.handleClick}
        className={`step ${isSelected ? 'step-selected' : ''} ${
          isClickable ? 'step-clickable' : ''
        }`}
      >
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;
