import React, { PureComponent } from 'react';
import './Step.css';

export class Step extends PureComponent {
  handleClick = () => {
    if (this.props.isClickable) {
      this.props.onClick(this.props.number);
    }
  };
  render() {
    let { isSelected, isClickable, number, children } = this.props;
    return (
      <div
        onClick={this.handleClick}
        className={
          isSelected
            ? 'step step-selected'
            : isClickable
              ? 'step step-clickable'
              : 'step'
        }
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }
}

export default Step;
