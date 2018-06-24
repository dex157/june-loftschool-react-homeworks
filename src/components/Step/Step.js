import React, { Component, Fragment } from 'react';
import './Step.css';

class Step extends Component {
  state = {};

  handleClick = () => {
    const { isClickable, number, onClick } = this.props;

    if (!isClickable) {
      return false;
    }

    onClick(number);
  };

  render() {
    const { isSelected, isClickable, number, children } = this.props;

    return (
      <Fragment>
        <div
          className={`step ${isSelected ? 'step-selected' : ''} ${
            isClickable ? 'step-clickable' : ''
          }`}
          onClick={this.handleClick}
        >
          <p className="step__number">{number}</p>
          <p className="step__title">{children}</p>
        </div>
      </Fragment>
    );
  }
}

export default Step;
