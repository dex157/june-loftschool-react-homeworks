import React from 'react';
import './Title.css';

class Title extends React.Component {
  render() {
    return <h1 className="title">{this.props.text}</h1>;
  }
}

export default Title;