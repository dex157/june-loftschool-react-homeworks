import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = event => {
    this.setState({
      selectedChild: event.target.dataset.id
    });
  };

  render() {
    const { children } = this.props;
    const { selectedChild } = this.state;
    const childList = React.Children.toArray(children);

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {childList.map((child, index) => (
              <li
                className="component-list__name"
                key={child.key}
                data-id={index}
                onClick={this.handleChangeChild}
              >
                {child.type.displayName || child.type.name}
              </li>
            ))}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">{childList[selectedChild]}</div>
      </div>
    );
  }
}

export default Switcher;
