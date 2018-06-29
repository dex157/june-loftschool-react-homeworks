import React, { Component, Fragment } from 'react';
import './Step.css';

class Step extends Component {
  handleClick = () => {
    const { isClickable, number, onClick } = this.props;
    if (isClickable === true) onClick(number);
  };

  render() {
    let classes;
    if (this.props.isClickable && this.props.isSelected)
      classes = 'step step-clickable step-selected';
    else if (this.props.isClickable && !this.props.isSelected)
      classes = 'step step-clickable';
    else if (!this.props.isClickable && this.props.isSelected)
      classes = 'step step-selected';
    else classes = 'step';

    return (
      <Fragment>
        <div className={classes} onClick={this.handleClick}>
          <div className="step__title">{this.props.children}</div>
          <div className="step__number">{this.props.number}</div>
        </div>
      </Fragment>
    );
  }
}

export default Step;
