import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = (event) => {
    this.setState({selectedChild: event.target.dataset.id});
  };

  render() {
    const { selectedChild } = this.state;
    const {children} = this.props;
    const navItems = ['VideoPlayer', 'Card number formating', 'ModalButton'];

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {navItems.map((item, index) => (
              <li key={index} className="component-list__name" data-id={index} onClick={this.handleChangeChild}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <hr></hr>
        <div className="component-wrapper">
        {React.Children.toArray(children)[selectedChild]}
        </div>
      </div>
    )
  }
}

export default Switcher;
