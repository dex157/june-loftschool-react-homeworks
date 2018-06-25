import React from 'react';
import './Step.css';

class Step extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!this.props.isClickable) {
      return;
    }

    this.props.onClick(this.props.number);
  }

  getClass({ isClickable, isSelected }) {
    let name = 'step';

    if (isClickable) {
      name += ' step-clickable';
    }

    if (isSelected) {
      name += ' step-selected';
    }
    return name;
  }

  render() {
    const { isClickable, isSelected, number, children } = this.props;

    return (
      <div
        className={this.getClass({
          isClickable: isClickable,
          isSelected: isSelected
        })}
        onClick={() => {
          this.handleClick();
        }}
      >
        {isSelected && <div className="step-selected" />}
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;
