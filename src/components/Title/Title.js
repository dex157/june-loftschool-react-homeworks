import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    const { children } = this.props;
    return <h1 className="title">{children}</h1>;
  }
}

export default Title;
