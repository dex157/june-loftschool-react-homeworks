import React, { PureComponent } from 'react';

export default class Title extends PureComponent {
  render() {
    const { step } = this.props;

    const text =
      step === 1 ? 'Персональная информация' : step === 2 ? 'Номер карты' : '';

    return <h1 className="title">{text}</h1>;
  }
}
