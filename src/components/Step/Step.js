import React, { Component, Fragment } from 'react';

class Step extends Component {
  handleClick = () => {
    const { isClickable, number, onClick } = this.props;
    if (isClickable === true) onClick(number);
  };

  render() {
    console.log(this.props.isSelected)
    return (
      <Fragment>
        <div
          className={this.props.isClickable ? 'step step-clickable' : 'step'}
        >
        {this.props.isSelected ? <div className="step-selected" /> : null}
        </div>
        <div className="step__number">{this.props.number}</div>
        <div className="step__title">{this.props.children}</div>
      </Fragment>
    );
  }
}

export default Step;
