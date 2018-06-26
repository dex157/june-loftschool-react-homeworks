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
    return (
      <div className="switcher">
        <div className="component-list">
          {children.map((child, id) => {
            return (
              <div
                className="component-list__name"
                data-id={id}
                selected_index={id}
                key={id}
                onClick={this.handleChangeChild}
              >
                {child.type.displayName
                  ? child.type.displayName
                  : child.type.name}
              </div>
            );
          })}
        </div>
        <hr />
        <div className="component-wrapper">
          {React.Children.map(children, (child, id) => {
            if (this.state.selectedChild != id) return;
            return child;
          })}
        </div>
      </div>
    );
  }

  handleChangeChild = event => {
    const value = event.target.getAttribute('selected_index');
    this.setState({
      selectedChild: value
    });
  };
}

export default Switcher;
