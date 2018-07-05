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
    const children = React.Children.toArray(this.props.children);
    return (
      <div className="switcher">
        <ul className="component-list">
          {children.map(
            (child, index) =>
              child.type.displayName ? (
                <li
                  className="component-list__name"
                  data-id={index}
                  key={index}
                  onClick={this.handleChangeChild}
                >
                  {child.type.displayName}
                </li>
              ) : (
                <li
                  className="component-list__name"
                  data-id={index}
                  key={index}
                  onClick={this.handleChangeChild}
                >
                  {child.type.name}
                </li>
              )
          )}
        </ul>
        <hr />
        <div className="component-wrapper">
          {children[this.state.selectedChild]}
        </div>
      </div>
    );
  }
}

export default Switcher;
