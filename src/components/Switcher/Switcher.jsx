import React, { Component } from "react";
import "./Switcher.css";

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName


class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = (e) => {
    const id = e.target.dataset.id;

    this.setState({
      selectedChild: id
    });
  };

  render() {
    const { children } = this.props;
    const { selectedChild } = this.state;
    const childrenArray = React.Children.toArray(children);

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(childrenArray, (child, index) => {
              return (
                <li
                  className="component-list__name"
                  data-id={index}
                  key={index}
                  onClick={this.handleChangeChild}>{child.type.displayName || child.type.name}</li>
              );
            })}
          </ul>
        </nav>
        <hr/>
        <div className="component-wrapper">
          {childrenArray[selectedChild]}
        </div>
      </div>
    );
  }
}

export default Switcher;
