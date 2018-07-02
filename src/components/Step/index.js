import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  state = {};
  handleClick = event => {
    const onClickMock = this.props.onClick;
    const isClickable = this.props.isClickable;
    const number = this.props.number;

    if (isClickable === true) {
      onClickMock(number);
    }
  };
  render() {
    const number = this.props.number;
    const title = this.props.children;
    const isSelected = this.props.isSelected;
    const isClickable = this.props.isClickable;
    const className =
      'step ' +
      (isClickable ? 'step-clickable ' : '') +
      (isSelected ? 'step-selected ' : '');

    return (
      <div className={className} onClick={this.handleClick}>
        <p className="step__number">{number}</p>
        <p className="step__title">{title}</p>
      </div>
    );
  }
}

export default Step;
