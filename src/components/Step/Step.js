import React, { Component } from 'react';
import './Step.css';

export default class Step extends Component {
  handleClick = () => {
    const { number, isClickable } = this.props;

    isClickable && this.props.onClick(number);
  };

  render() {
    const { isSelected, isClickable, number, children } = this.props;
    const Class = ['step'];

    isSelected && Class.push('step-selected');
    isClickable && Class.push('step-clickable');

    return (
      <div className={Class.join(' ')} onClick={this.handleClick}>
        <p className="step__number">{ number }</p>
        <p className="step__title">{ children }</p>
      </div>
    );
  }
}
