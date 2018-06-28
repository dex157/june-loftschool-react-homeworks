import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  static displayName = 'A_test';

  constructor(props) {
    super(props);
    this.state = {
      selectedChild: 0
    };
  }

  handleChangeChild = event => {
    let targetIndex = parseInt(event.target.getAttribute('data-id'));
    this.setState({
      selectedChild: targetIndex
    });
    this.forceUpdate();
  };

  render() {
    const { children } = this.props;
    const { selectedChild } = this.state;
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (child, index) => {
              return (
                <li
                  onClick={this.handleChangeChild}
                  className="component-list__name"
                  data-id={index}
                >
                  {child.type.displayName || child.type.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="divider" />
        <div className="component-wrapper">
          {React.Children.map(children, (child, index) => {
            if (index === selectedChild) {
              return child;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Switcher;
