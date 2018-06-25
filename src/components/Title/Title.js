import React, { Component } from 'react';

class Title extends Component {
  state = {};
  render() {
    const { children } = this.props;
    return <h1 className="title">{children}</h1>;
  }
}

export default Title;
