import React, { Fragment, Component } from 'react';
import './Step.css';
export default class Step extends Component {
  handleClick = () => {};
  render() {
    return (
      <Fragment>
        <div className="step"></div>
        <div className="step__number" />
        <div className="step__title" />
      </Fragment>
    );
  }
}
