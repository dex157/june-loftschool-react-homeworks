import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  getTitle = step => {
    if (step === 1) {
      return 'Персональная информация';
    } else if (step === 2) {
      return 'Номер карты';
    } else if (step === 3) {
      return 'Ну и всё';
    }
  };

  render() {
    return <p className="title">{this.getTitle(this.props.step)}</p>;
  }
}

export default Title;
