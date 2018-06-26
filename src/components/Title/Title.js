import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    const { step } = this.props;

    const text =
      step === 1 ? 'Персональная информация' : step === 2 ? 'Номер карты' : '';

    return <h1 className="title">{text}</h1>;
  }
}
