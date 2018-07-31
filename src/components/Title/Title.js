import React, { Component } from 'react';

class Title extends Component {
  state = {};
  render() {
    return <h1 className="title">{this.props.children}</h1>;
  }
}

export default Title;
