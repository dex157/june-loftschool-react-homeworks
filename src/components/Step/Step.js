import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  handleClick = () => {
    if (this.props.isClickable) {
      let simulateFn = this.props.onClick;
      if (simulateFn) {
        simulateFn(this.props.number);
      }
    }
  };

  render() {
    return (
      <div
        className={
          'step' +
          (this.props.isSelected
            ? ' step-selected'
            : this.props.isClickable
              ? ' step-clickable'
              : '')
        }
        onClick={this.handleClick}
      >
        <div className="step__number">{this.props.number}</div>
        <div className="step__title">{this.props.children}</div>
      </div>
    );
  }
}

export default Step;
