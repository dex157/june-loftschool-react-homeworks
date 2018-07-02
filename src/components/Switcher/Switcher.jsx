import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {

  state = {
    selectedChild: 0
  }

  handleChangeChild = e => {
    const { id } = e.target.dataset;

    this.setState(() => {
      return {
        selectedChild: id
      }
    });
  }

  render() {
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {
              this.props.children.map((el, ndx) => <li 
                                  onClick={this.handleChangeChild} 
                                  key={ndx} 
                                  className="component-list__name" 
                                  data-id={ndx}> 
                                    {el.type.displayName || el.type.name}
                                  </li>)
            }
          </ul>
        </nav>
        <hr/>
        <div className="component-wrapper">
          {this.props.children[this.state.selectedChild]}
        </div>
      </div>
    )
  }
}

export default Switcher;
