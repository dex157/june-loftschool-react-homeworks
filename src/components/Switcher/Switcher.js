import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

export default class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = event => {
    const id = event.target.dataset.id;
    this.setState(state => ({
      selectedChild: id
    }));
  };

  render() {
    const { children } = this.props;
    const chidrenArray = React.Children.toArray(children);

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (element, index) => {
              return (
                <li
                  className="component-list__name"
                  data-id={index}
                  onClick={this.handleChangeChild}
                >
                  {element.type.displayName || element.type.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">
          {chidrenArray[this.state.selectedChild]}
        </div>
      </div>
    );
  }
}
