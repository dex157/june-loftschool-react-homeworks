import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  render() {
    const { children } = this.props;
    const reactChildren = React.Children.toArray(children);

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {reactChildren.map((child, index) => (
              <li
                key={child.key}
                className="component-list__name"
                data-id={index}
                onClick={this.handleChangeChild}
              >
                {child.type.displayName
                  ? child.type.displayName
                  : child.type.name}
              </li>
            ))}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">{this.renderChildren()}</div>
      </div>
    );
  }

  renderChildren() {
    const { selectedChild } = this.state;
    const { children } = this.props;

    return children[selectedChild];
  }

  handleChangeChild = event => {
    this.setState({ selectedChild: event.target.dataset.id });
  };
}

export default Switcher;
