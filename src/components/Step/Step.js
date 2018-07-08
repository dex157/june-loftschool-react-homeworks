import React, { PureComponent } from 'react';
import './Step.css';

export default class Step extends PureComponent {
  render() {
    const { isSelected, isClickable, number, children } = this.props;

    return (
      <div
        className={
          'step ' +
          (isSelected ? 'step-selected' : '') +
          (isClickable ? 'step-clickable' : '')
        }
        onClick={this.handleClick}
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }

  handleClick = () => {
    const { isClickable, onClick, number } = this.props;

    if (isClickable) {
      onClick(number);
    }
  };
}
