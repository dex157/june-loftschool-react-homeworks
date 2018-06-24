import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { step } = this.props;
    const title = step === 1 ? 'Персональная информация' : 'Номер карты';

    return <h1 className="title">{title}</h1>;
  }
}

export default Title;
