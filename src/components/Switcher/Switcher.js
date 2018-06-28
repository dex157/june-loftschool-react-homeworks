import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = event => {
    const target = event.target;
    const id = target.dataset.id;
    this.setState({
      selectedChild: id
    });
  };

  render() {
    const { children } = this.props;
    const { selectedChild } = this.state;
    const childrenArr = React.Children.toArray(children);

    return (
      <div className="switcher">
        <ul className="component-list">
          {React.Children.map(children, (child, index) => (
            <li
              className="component-list__name"
              key={index}
              data-id={index}
              onClick={this.handleChangeChild}
            >
              {child.type.displayName || child.type.name}
            </li>
          ))}
        </ul>

        <hr />

        <section className="component-wrapper">
          {childrenArr[selectedChild]}
        </section>
      </div>
    );
  }
}

export default Switcher;
