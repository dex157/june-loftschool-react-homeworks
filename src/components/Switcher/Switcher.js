import React, { Component, Fragment } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = e => {
    this.setState({ selectedChild: parseInt(e.target.dataset.id, 10) });
  };

  render() {
    const { children } = this.props;
    const { selectedChild } = this.state;

    return (
      <Fragment>
        <ol className="component-list">
          {React.Children.map(children, (item, index) => {
            const name = item.type.displayName || item.type.name;

            return (
              <li
                className="component-list__name"
                data-id={index}
                key={name}
                onClick={this.handleChangeChild}
              >
                {name}
              </li>
            );
          })}
        </ol>
        <hr />
        {React.Children.map(children, (item, index) => {
          if (selectedChild === index) return item;
        })}
      </Fragment>
    );
  }
}

export default Switcher;
