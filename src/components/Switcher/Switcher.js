import React, { Component, Fragment } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = e => {
    this.setState({ selectedChild: Number(e.target.dataset.id) });
  };

  render() {
    const { selectedChild } = this.state,
      { children } = this.props;

    return (
      <Fragment>
        <ul className="component-list">
          {React.Children.map(children, (item, idx) => {
            const name = item.type.displayName || item.type.name;

            return (
              <li
                className="component-list__name"
                data-id={idx}
                key={name}
                onClick={this.handleChangeChild}
              >
                {name}
              </li>
            );
          })}
        </ul>
        <hr />
        {React.Children.map(children, (item, idx) => {
          if (selectedChild === idx) return item;
        })}
      </Fragment>
    );
  }
}

export default Switcher;
