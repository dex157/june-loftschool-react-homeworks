import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  handleClick = () => {
    if (this.props.isClickable === true) {
      this.props.onClick(this.props.number);
    } else {
      return false;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={'step'
            .concat(this.props.isSelected ? ' step-selected' : '')
            .concat(this.props.isClickable ? ' step-clickable' : '')}
          onClick={this.handleClick}
        >
          <div className="step__number">{this.props.number}</div>
          <div className="step__title">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Step;
