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
    const childs = React.Children.toArray(this.props.children);
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(childs, (child, index) => {
              return (
                <li
                  data-id={index}
                  key={index}
                  className="component-list__name"
                  onClick={this.handleChangeChild}
                >
                  {child.type.displayName
                    ? child.type.displayName
                    : child.type.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">
          {childs[this.state.selectedChild]}
        </div>
      </div>
    );
  }
}

export default Switcher;
