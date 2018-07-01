import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  render() {
    const nav = [
      { id: 0, text: 'VideoPlayer' },
      { id: 1, text: 'Card number formating' },
      { id: 2, text: 'ModalButton' }
    ];

    return <nav>
        <ul className="component-list">
          {nav.map(element => {
            return (
            <li className="component-list__name" id={element.id} key={element.id}> 
              {element.text}
            </li>
            )
          })}
        </ul>
      </nav>;
  }
}

export default Switcher;
