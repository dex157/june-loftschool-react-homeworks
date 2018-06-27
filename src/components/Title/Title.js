import React, { Component, Fragment } from 'react';

class Title extends Component {
  render() {
    const { step } = this.props;
    const titles = ['Персональная информация', 'Номер карты'];
    if (step > 0 && step < 2)
      return <h1 className="title">{titles[step - 1]}</h1>;
    return <Fragment />;
  }
}

export default Title;
