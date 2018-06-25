import React, { Component } from 'react';
import './Step.css';

export default class Step extends Component {
  handleClick = () => {
    let isClickable = this.props.isClickable;

    if (isClickable) {
      this.props.onClick(this.props.number);
    }
  };

  render() {
    let isSelected = this.props.isSelected;
    let isClickable = this.props.isClickable;

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
        <p className="step__number">{this.props.number}</p>
        <p className="step__title">{this.props.children}</p>
      </div>
    );
  }
}
