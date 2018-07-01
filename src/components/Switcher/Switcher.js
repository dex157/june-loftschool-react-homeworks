import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = e => {
    const id = e.target.dataset.id;
    this.setState({
      selectedChild: id
    });
  };

  render() {
    const { selectedChild } = this.state;
    const { children } = this.props;

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (child, index) => {
              const name = child.type.displayName || child.type.name;

              return (
                <li
                  key={index}
                  data-id={index}
                  className="component-list__name"
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
