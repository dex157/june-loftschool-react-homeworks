import React, { Component, Fragment } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  render() {
    return (
        <ul className="component-list">
        </ul>
    );
  }
}

export default Switcher;
