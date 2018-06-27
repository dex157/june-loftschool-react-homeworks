import React, { Component } from 'react';
import './Switcher.css';
import ModalButton from '../ModalButton';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

export default class Switcher extends Component {
  state = {
    selectedChild: 0,
    childCorrespondance: [
      'Video Player',
      'Card number formating',
      'ModalButton'
    ]
  };

  handleChangeChild = () => {};

  render() {
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(
              this.state.childCorrespondance,
              (element, index) => {
                return (
                  <li
                    className="component-list__name"
                    data-id={index}
                    onClick={this.ChangeChild}
                  >
                    {element}
                  </li>
                );
              }
            )}
          </ul>
        </nav>
        <div className="component-wrapper">
          <ModalButton />
        </div>
      </div>
    );
  }
}
