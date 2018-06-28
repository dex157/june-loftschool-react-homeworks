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
    this.setState({
      children: React.Children.toArray(this.props.children)
    });
  }

  handleChangeChild = event => {
    const id = event.target.dataset.id;

    if (id < 0) {
      return;
    }

    this.setState({
      selectedChild: id
    });
  };

  getItemId = name => {
    return this.state.children.findIndex(item => {
      return item.type.name === name;
    });
  };

  render() {
    const { children, selectedChild } = this.state;

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {children.map(item => {
              return (
                <li
                  className="component-list__name"
                  onClick={this.handleChangeChild}
                  key={item.type.name}
                  data-id={this.getItemId(item.type.name)}
                >
                  {item.type.displayName || item.type.name}
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
