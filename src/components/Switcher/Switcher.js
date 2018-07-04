import React, { Component } from 'react';
import './Switcher.css';
// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  static displayName = 'Switcher';

  handleChangeChild = e => {
    const id = e.target.dataset.id;
    this.setState(() => ({
      selectedChild: id
    }));
  };

  render() {
    const kids = React.Children.toArray(this.props.children);
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(kids, (child, index) => {
              return (
                <li
                  className="component-list__name"
                  key={index}
                  data-id={index}
                  onClick={this.handleChangeChild}
                >
                  {child.type.displayName || child.type.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">
          {kids[this.state.selectedChild]}
        </div>
      </div>
    );
  }
}

export default Switcher;
