import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  state = {};
  render() {
    const title = this.props.children;
    return <h1 className="title">{title}</h1>;
  }
}

export default Title;
