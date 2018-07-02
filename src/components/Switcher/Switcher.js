import React, { Component } from 'react';

import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0,
    children: []
  };

  componentDidMount() {
    const { children } = this.props;
    this.setState({
      children: React.Children.toArray(children)
    });
  }

  handleChangeChild = event => {
    const { id } = event.target.dataset;
    this.setState({ selectedChild: id });
  };

  render() {
    const { selectedChild, children } = this.state;

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {children.map((child, key) => {
              return (
                <li
                  className="component-list__name"
                  data-id={key}
                  key={key}
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
        <div className="component-wrapper">{children[selectedChild]}</div>
      </div>
    );
  }
}

export default Switcher;
