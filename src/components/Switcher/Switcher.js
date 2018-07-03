import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };
  handleChangeChild = event => {
    console.log(event.target.dataset.id);
    this.setState({ selectedChild: +event.target.dataset.id });
  };
  render() {
    const nav = this.state.nav;
    const children = React.Children.toArray(this.props.children);
    const childrenMap = React.Children.map(
      this.props.children,
      (child, index) => {
        if (index === this.state.selectedChild) {
          return child;
        }
      }
    );
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {children.map((child, key) => (
              <li
                className="component-list__name"
                onClick={this.handleChangeChild}
                data-id={key}
                key={key}
              >
                {child.type.displayName?child.type.displayName:child.type.name}
              </li>
            ))}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">{childrenMap}</div>
      </div>
    );
  }
}

export default Switcher;
