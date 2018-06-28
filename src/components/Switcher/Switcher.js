import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = event => {
    this.setState({ selectedChild: event.target.dataset.id });
  };

  render() {
    const { selectedChild } = this.state,
      { children } = this.props;

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (item, index) => {
              const name = item.type.displayName || item.type.name;

              return (
                <li
                  key={index}
                  className="component-list__name"
                  data-id={index}
                  onClick={this.handleChangeChild}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">
          {React.Children.toArray(children)[selectedChild]}
        </div>
      </div>
    );
  }
}

export default Switcher;
